import { HttpException, Injectable } from "@nestjs/common";
import { MinioService } from "src/modules/assets/minio.service";
import { PrismaService } from "src/services/prisma.service";
import { AssetDto, GetAssetsDto } from "./dto/list.assets.dto";
import { AssetType, Prisma } from "@sana/db/generated/prisma";
import { CreateAssetRequestDto, CreateAssetsResponseDto } from "./dto/create.asset.dto";
import { validateAssetsList } from "src/validators/assets.validator";
import { getFileExtension } from "src/utilities/get.file.extenion";
import { objectKeyGenerator } from "src/utilities/get.objectkey";
import { AssetTypesResponseDto } from "./dto/list.asset.type.dto";
import { Console } from "console";
import { RetrieveAssetsRequestDto, RetrieveAssetsResponseDto, validateRetrieveAssetsRequestDto } from "./dto/retrieve.assets.dto";

@Injectable()
export class AssetsServices {
  constructor(
    readonly prisma: PrismaService,
    readonly minio: MinioService
  ) {}

  async getByAssetId(assetId: string): Promise<AssetDto> {
    const asset = await this.prisma.assets.findUnique({ where: { id: assetId }, include: { type: true } });
    const url = await this.minio.presignedGetObject(asset.bucketName, asset.objectKey, 60 * 5);
    return {
      previewUrl: url,
      assetId: asset.id,
      fileName: asset.fileName,
      type: {
        desc: asset.type.desc,
        name: asset.type.type,
        typeId: asset.typeId,
      },
    };
  }
  // async getByObjectKey(objectKey: string): Promise<AssetDto> {
  //   const asset = await this.prisma.assets.findUnique({ where: { objectKey } });

  //   const url = await this.minio.presignedGetObject("main", objectKey, 60 * 5);
  //   return {
  //     previewUrl: url,
  //     type: asset.type as AssetTypes,
  //     assetId: asset.id,
  //     fileName: asset.fileName,
  //   };
  // }
  async listAssetsByFilter(dto: GetAssetsDto[]): Promise<AssetDto[]> {
    if (dto.find((asset) => !asset.assetId)) {
      throw new HttpException("all assets should have at least one of objectKey or assetId", 400);
    }

    const assets = await this.prisma.assets.findMany({
      where: {
        OR: [{ id: { in: dto.map((asset) => asset.assetId).filter(Boolean) } }],
      },
      include: {
        type: true,
      },
    });

    const assetsWithPreview: AssetDto[] = await Promise.all(
      assets.map(async (asset) => {
        const preview = await this.minio.presignedGetObject("main", asset.objectKey, 60 * 5);
        let assets: AssetDto = {
          assetId: asset.id,
          fileName: asset.fileName,
          previewUrl: preview,
          type: { desc: asset.type.desc, name: asset.type.type, typeId: asset.typeId },
        };
        return assets;
      })
    );

    return assetsWithPreview;
  }

  async listAllAssets(): Promise<any> {
    const assets = await this.minio.listObjects("main");

    console.log(assets);
  }

  async listTypes(): Promise<AssetTypesResponseDto> {
    const types = await this.prisma.assetType.findMany();

    return {
      types: types.map((t) => ({ id: t.id, desc: t.desc, type: t.type })),
    };
  }

  async createPrivateAssets(dto: CreateAssetRequestDto): Promise<CreateAssetsResponseDto> {
    const validateDto = validateAssetsList(dto);

    const createdAssets = await Promise.all(
      dto.assets.map(async (asset) => {
        const type = await this.prisma.assetType.findUnique({
          where: {
            type: asset.type,
          },
        });

        const { objectKey, folderPath } = objectKeyGenerator({
          fileName: asset.fileName,
          type: asset.type,
          passengerId: asset.passengerId,
          resdiencyCountryId: asset.residencyCountryId,
          userId: asset.userId,
          visaCountryId: asset.visaCountryId,
          visaPassengerId: asset.visaPassengerId,
        });

        await this.minio.deleteFolder("main", folderPath);

        const where: Prisma.AssetsWhereUniqueInput = {
          folderPath: folderPath,
        };
        const create: Prisma.AssetsCreateInput = {
          bucketName: "main",
          fileName: asset.fileName,
          folderPath: folderPath,
          extension: getFileExtension(asset.fileName),
          objectKey: objectKey,
          type: {
            connect: {
              type: asset.type,
            },
          },
          ...(asset.passengerId && { passenger: { connect: { id: asset.passengerId } } }),
          ...(asset.residencyCountryId && { residencyCountry: { connect: { id: asset.residencyCountryId } } }),
          ...(asset.visaCountryId && { visaCountry: { connect: { id: asset.visaCountryId } } }),
          ...(asset.visaPassengerId && { visaPassenger: { connect: { id: asset.visaPassengerId } } }),
          ...(asset.userId && { user: { connect: { id: asset.userId } } }),
        };

        const update: Prisma.AssetsUpdateInput = {
          extension: getFileExtension(asset.fileName),
          objectKey: objectKey,
          fileName: asset.fileName,
        };

        const select: Prisma.AssetsSelect = {
          id: true,
          objectKey: true,
          type: true,
          fileName: true,
          passengerId: true,
          visaCountryId: true,
          residencyCountryId: true,
          userId: true,
          visaPassengerId: true,
        };

        return await this.prisma.assets.upsert({
          where: where,
          create: create,
          update: update,
          select: select,
        });
      })
    );

    let response: CreateAssetsResponseDto = {
      assets: (
        await Promise.all(
          createdAssets.map(async (asset) => {
            if (asset.fileName) {
              let url = await this.minio.presignedPutObject("main", asset.objectKey, 5 * 60);

              return {
                fileName: asset.fileName,
                id: asset.id,
                type: {
                  name: asset.type.type,
                  desc: asset.type.desc,
                  typeId: asset.typeId,
                },
                uploadUrl: url,
                passengerId: asset.passengerId,
                visaPassengerId: asset.visaPassengerId,
                visaCountryId: asset.visaCountryId,
                residencyCountryId: asset.residencyCountryId,
              };
            }
          })
        )
      ).filter(Boolean),
    };

    return response;
  }

  async createPublicAssets(dto: CreateAssetRequestDto): Promise<CreateAssetsResponseDto> {
    const validateDto = validateAssetsList(dto);

    const createdAssets = await Promise.all(
      dto.assets.map(async (asset) => {
        const { objectKey, folderPath } = objectKeyGenerator({
          fileName: asset.fileName,
          type: asset.type,
          passengerId: asset.passengerId,
          resdiencyCountryId: asset.residencyCountryId,
          userId: asset.userId,
          visaCountryId: asset.visaCountryId,
          visaPassengerId: asset.visaPassengerId,
        });

        await this.minio.deleteFolder("public-assets", folderPath);

        const create: Prisma.AssetsCreateInput = {
          bucketName: "public-assets",
          extension: getFileExtension(asset.fileName),
          fileName: asset.fileName,
          type: {
            connect: {
              type: asset.type,
            },
          },
          ...(asset.passengerId && { passenger: { connect: { id: asset.passengerId } } }),
          ...(asset.residencyCountryId && { residencyCountry: { connect: { id: asset.residencyCountryId } } }),
          ...(asset.visaCountryId && { visaCountry: { connect: { id: asset.visaCountryId } } }),
          ...(asset.visaPassengerId && { visaPassenger: { connect: { id: asset.visaPassengerId } } }),
          ...(asset.userId && { user: { connect: { id: asset.userId } } }),
          objectKey: objectKey,
          folderPath: folderPath,
        };

        const update: Prisma.AssetsUpdateInput = {
          extension: getFileExtension(asset.fileName),
          fileName: asset.fileName,
          objectKey: objectKey,
        };

        const where: Prisma.AssetsWhereUniqueInput = {
          folderPath: folderPath,
        };

        const select: Prisma.AssetsSelect = {
          id: true,
          type: true,
          fileName: true,
          objectKey: true,
          passengerId: true,
          visaCountryId: true,
          residencyCountryId: true,
          userId: true,
          visaPassengerId: true,
        };

        return await this.prisma.assets.upsert({
          create,
          update,
          where,
          select,
        });
      })
    );

    let response: CreateAssetsResponseDto = {
      assets: (
        await Promise.all(
          createdAssets.map(async (asset) => {
            if (asset.fileName) {
              let url = await this.minio.presignedPutObject("public-assets", asset.objectKey, 5 * 60);
              return {
                fileName: asset.fileName,
                id: asset.id,
                type: {
                  name: asset.type.type,
                  desc: asset.type.desc,
                  typeId: asset.typeId,
                },
                uploadUrl: url,
                passengerId: asset.passengerId,
                visaPassengerId: asset.visaPassengerId,
                userId: asset.userId,
                visaCountryId: asset.visaCountryId,
                residencyCountryId: asset.residencyCountryId,
              };
            }
          })
        )
      ).filter(Boolean),
    };
    return response;
  }

  async retrieveAssets(dto: RetrieveAssetsRequestDto): Promise<RetrieveAssetsResponseDto[]> {
    const { isValid, error } = validateRetrieveAssetsRequestDto(dto);

    if (!isValid) {
      throw new HttpException(error, 400);
    }

    const allInnerAssetsArrays = await Promise.all(
      dto.assets.map(async (assetData) => {
        const conditions = [];

        if (assetData.assetId && assetData.assetId.trim() !== "") {
          conditions.push({ id: assetData.assetId });
        }
        if (assetData.objectKey && assetData.objectKey.trim() !== "") {
          conditions.push({ objectKey: assetData.objectKey });
        }
        if (assetData.visaCountryId && assetData.visaCountryId.trim() !== "") {
          conditions.push({ visaCountryId: assetData.visaCountryId });
        }
        if (assetData.visaPassengerId && assetData.visaPassengerId.trim() !== "") {
          conditions.push({ visaPassengerId: assetData.visaPassengerId });
        }
        if (assetData.residencyCountryId && assetData.residencyCountryId.trim() !== "") {
          conditions.push({ residencyCountryId: assetData.residencyCountryId });
        }
        if (assetData.passengerId && assetData.passengerId.trim() !== "") {
          conditions.push({ passengerId: assetData.passengerId });
        }
        if (assetData.userId && assetData.userId.trim() !== "") {
          conditions.push({ userId: assetData.userId });
        }

        if (conditions.length === 0) {
          return []; // No matching assets found for this input
        }

        const assets = await this.prisma.assets.findMany({
          where: {
            OR: conditions,
          },
          include: { type: true },
        });

        const innerAssets = await Promise.all(
          assets.map(async (asset) => {
            let previewUrl: string = "";

            if (asset.bucketName === "main") {
              previewUrl = await this.minio.presignedGetObject("main", asset.objectKey, 5 * 60);
            } else if (asset.bucketName === "public-assets") {
              previewUrl = `http://${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}/public-assets/${asset.objectKey}`;
            }
            // Add handling for other buckets if needed (e.g., default or error)
            return {
              fileName: asset.fileName,
              assetId: asset.id,
              visaPassengerId: asset.visaPassengerId,
              passengerId: asset.passengerId,
              userId: asset.userId,
              visaCountryId: asset.visaCountryId,
              residencyCountryId: asset.residencyCountryId,
              preview: previewUrl,
              type: {
                name: asset.type.type,
                desc: asset.type.desc,
              },
            };
          })
        );

        return innerAssets;
      })
    );

    const response: RetrieveAssetsResponseDto[] = allInnerAssetsArrays.flat();

    return response;
  }
}
