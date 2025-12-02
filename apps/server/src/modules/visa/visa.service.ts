import { PrismaService } from "src/services/prisma.service";
import { VisaTypes } from "./dto/visa.dto";
import { ListVisaCountriesResponseDto, VisaCountriesDto, VisaCountriesQueriesDto, VisaDuration } from "./dto/list.country.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { I18nService } from "src/common/services/i18n.service";
import { CreateVisaCountryDto, CreateVisaCountryResponseDto } from "./dto/create.country.dto";
import { Prisma, VisaCountry, VisaGroups, VisaPrices } from "@sana/db/generated/prisma";
import { UpdateCountryDto } from "./dto/update.country.dto";
import { MessageDto, MessageStatus } from "src/common/dto/common.dto";
import { AddPriceToGroupDto } from "./dto/add.price.dto";
import { UpdateGroupDto } from "./dto/update.group.dto";
import { UpdatePriceDto } from "./dto/update.price.dto";
import { UpdateDurationRequestDto } from "./dto/update.duration.dto";
import { RequestVisaCountryImageUploadUrlDto, RequestVisaCountryImageUploadUrlResponseDto } from "./dto/upload.dto";
import { MinioService } from "src/modules/assets/minio.service";
import { getFileExtension } from "src/utilities/get.file.extenion";
import { AddGroupsToCountryRequestDto, AddGroupsToCountryResponseDto } from "./dto/add.group.dto";
import { AddBulkVisaPricesDto } from "./dto/add.bulk.price.dto";
import { AssetDto } from "../assets/dto/list.assets.dto";
import { AddTypeToCountryDto } from "./dto/add.type.dto";
import { AssetsServices } from "../assets/assets.service";

@Injectable()
export class VisaServices {
  constructor(
    private readonly prisma: PrismaService,
    private i18n: I18nService,
    private readonly minioService: MinioService,
    private readonly assetsService: AssetsServices
  ) {}

  async createVisaCountry(createVisaCountryDto: CreateVisaCountryDto): Promise<CreateVisaCountryResponseDto> {
    const input = createVisaCountryDto;

    const createCountry = await this.prisma.visaCountry.create({
      data: {
        countryCode: input.countryCode,
        countryEnName: input.countryEnName,
        countryFaName: input.countryFaName,
        isValidForDays: input.isValidForDays,
        processTime: input.processTime,
        durations: {
          createMany: {
            data: input.durations,
          },
        },
        types: input.types,
        immediatePayment: input.immediatePayment,
      },
    });

    const assets = await this.assetsService.createPublicAssets({
      assets: [
        { fileName: "thumbnail", type: "THUMBNAIL", visaCountryId: createCountry.id },
        { fileName: "header", type: "HEADER", visaCountryId: createCountry.id },
        { fileName: "flag", type: "FLAG", visaCountryId: createCountry.id },
      ],
    });

    const updateAssetsType = await this.prisma.assetType.updateMany({
      where: {
        type: {
          in: createVisaCountryDto.requiredAssetTypes.map((type) => type),
        },
      },
      data: {
        visaCountryId: createCountry.id,
      },
    });

    return {
      countryId: createCountry.id,
    };
  }

  async listVisaCountries(listCountryDto: VisaCountriesQueriesDto): Promise<ListVisaCountriesResponseDto> {
    const perPage = parseInt(listCountryDto.perPage);
    const page = parseInt(listCountryDto.page);

    const where: Prisma.VisaCountryWhereInput = {
      countryEnName: listCountryDto.countryEnName,
      countryFaName: listCountryDto.countryFaName,
      countryCode: listCountryDto.countryCode,
    };

    const totalCount = await this.prisma.visaCountry.count({ where });

    const countriesData = await this.prisma.visaCountry.findMany({
      include: {
        groups: {
          include: {
            prices: {
              include: {
                duration: true,
              },
            },
          },
        },
        durations: true,
        assets: {
          include: {
            type: true,
          },
        },
        requiredAssetTypes: true,
      },
      where: where,
      take: perPage,
      skip: (page - 1) * perPage,
    });

    console.log(countriesData, page, perPage);

    const totalPages = Math.ceil(totalCount / perPage);
    const currentPage = page;

    const response: ListVisaCountriesResponseDto = {
      countries: await Promise.all(
        countriesData.map(async (c) => ({
          ...c,
          durations: c.durations,
          types: c.types as VisaTypes[],
          assets: await this.assetsService.retrieveAssets({ assets: [{ visaCountryId: c.id }] }),
          groups: c.groups.map((group) => ({
            ...group,
            prices: group.prices.map((p) => ({
              ...p,
              priceAmount: p.priceAmount.toNumber(),
              type: p.type as VisaTypes,
            })),
          })),
        }))
      ),
      pagination: {
        totalItems: totalCount,
        totalPages: totalPages,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1,
        page: currentPage,
        perPage: perPage,
      },
    };

    return response;
  }

  async getVisaCountryById(countryId: string): Promise<VisaCountriesDto> {
    const visaCountry = await this.prisma.visaCountry.findUnique({
      where: { id: countryId },
      include: {
        durations: true,
        assets: {
          include: {
            type: true,
          },
        },
        groups: {
          include: {
            prices: true,
          },
        },
        requiredAssetTypes: true,
      },
    });

    let response: VisaCountriesDto = {
      ...visaCountry,
      assets: await this.assetsService.retrieveAssets({ assets: [{ visaCountryId: visaCountry.id }] }),
      groups: visaCountry.groups.map((g) => ({
        ...g,
        prices: g.prices.map((p) => ({
          ...p,
          type: p.type as VisaTypes,
          priceAmount: p.priceAmount.toNumber(),
        })),
      })),
      types: visaCountry.types as VisaTypes[],
    };

    return response;
  }

  async updateVisaCountry(countryId: string, updateCountryDto: UpdateCountryDto): Promise<MessageDto> {
    const visaCountry = await this.prisma.visaCountry.findUnique({
      where: {
        id: countryId,
      },
      include: {
        durations: true,
      },
    });

    if (updateCountryDto.durations.length < visaCountry.durations.length) {
      visaCountry.durations.map(async (visaDuration) => {
        if (!updateCountryDto.durations.find((duration) => duration.durationInDays === visaDuration.durationInDays)) {
          await this.prisma.visaPrices.deleteMany({
            where: {
              durationId: visaDuration.id,
            },
          });
          await this.prisma.visaDuration.delete({
            where: {
              id: visaDuration.id,
            },
          });
        }
      });
    }

    updateCountryDto.durations.map((updateDuration) => {
      if (!visaCountry.durations.find((duration) => duration.durationInDays === updateDuration.durationInDays)) {
        this.prisma.visaCountry.update({
          where: {
            id: countryId,
          },
          data: {
            durations: {
              create: {
                durationInDays: updateDuration.durationInDays,
              },
            },
          },
        });
      }
    });

    let updatePayload = Object.fromEntries(
      Object.entries({ ...updateCountryDto }).filter(([key, value]) => value !== undefined || key === "durations")
    );

    await this.prisma.visaCountry.update({
      data: {
        ...updatePayload,
      },
      where: {
        id: countryId,
      },
    });

    return {
      message: this.i18n.translate("common.success.updated"),
      status: MessageStatus.SUCCESS,
    };
  }

  async addPrice(groupId: string, addPriceToGroupDto: AddPriceToGroupDto): Promise<MessageDto> {
    const addPriceToGroup = await this.prisma.visaPrices.create({
      data: {
        duration: {
          connect: {
            id: addPriceToGroupDto.durationId,
          },
        },
        priceAmount: addPriceToGroupDto.priceAmount,
        priceUnit: addPriceToGroupDto.priceUnit,
        type: addPriceToGroupDto.type,
        visaGroup: {
          connect: {
            id: groupId,
          },
        },
      },
    });

    return {
      message: this.i18n.translate("common.success.created"),
      status: MessageStatus.SUCCESS,
    };
  }

  async addBulkPrice(addBulkVisaPricesDto: AddBulkVisaPricesDto) {
    const groups = addBulkVisaPricesDto.groups;
    groups.map(async (group) => {
      let prices = [];
      group.prices.map((price) => {
        const thisPrice = {
          durationId: price.durationId,
          priceAmount: price.priceAmount,
          priceUnit: price.priceUnit,
          type: price.type,
          visaGroupId: group.groupId,
        };
        prices = [...prices, thisPrice];
      });
      await this.prisma.visaPrices.createMany({
        data: prices,
      });
    });
    return {
      message: this.i18n.translate("common.success.updated"),
      status: MessageStatus.SUCCESS,
    };
  }

  async addGroup(countryId: string, addGroupToCountryDto: AddGroupsToCountryRequestDto): Promise<AddGroupsToCountryResponseDto> {
    const groups = await this.prisma.visaGroups.findMany({ where: { countryId: countryId } });

    const hasOverlap = groups.some((existingGroup) => {
      const { groups } = addGroupToCountryDto;

      return groups.some((g) => g.startAge <= existingGroup.endAge && g.endAge >= existingGroup.startAge);
    });

    if (hasOverlap) {
      throw new HttpException("there are other groups that has age overlap with one of the provided groups ", 400);
    }

    const createdGroups = await this.prisma.visaGroups.createManyAndReturn({
      data: addGroupToCountryDto.groups.map((g) => ({
        countryId,
        startAge: g.startAge,
        endAge: g.endAge,
        title: g.title,
      })),
    });

    return {
      groups: createdGroups,
    };
  }

  async updateVisaGroup(groupId: string, updateGroupDto: UpdateGroupDto): Promise<MessageDto> {
    const updateGroup = await this.prisma.visaGroups.update({
      data: {
        ...updateGroupDto,
      },
      where: {
        id: groupId,
      },
    });

    return {
      message: this.i18n.translate("common.success.updated"),
      status: MessageStatus.SUCCESS,
    };
  }

  async updateVisaPrice(priceId: string, updatePriceDto: UpdatePriceDto): Promise<MessageDto> {
    console.log(updatePriceDto, priceId);

    const updatePrice = await this.prisma.visaPrices.update({
      data: {
        duration: {
          update: {
            id: updatePriceDto.durationId,
          },
        },
        priceUnit: updatePriceDto.priceUnit,
        priceAmount: updatePriceDto.priceAmount,
      },
      where: {
        id: priceId,
      },
    });

    return {
      message: this.i18n.translate("common.success.updated"),
      status: MessageStatus.SUCCESS,
    };
  }

  async updateVisaDuration(durationId: string, updateDurationDto: UpdateDurationRequestDto) {
    const updateDuration = await this.prisma.visaDuration.update({
      where: {
        id: durationId,
      },
      data: {
        ...updateDurationDto,
      },
    });
  }

  async deleteAssetTypeFromCountry(typeId: string): Promise<MessageDto> {
    const deleteCountryFromType = await this.prisma.assetType.update({
      where: { id: typeId },
      data: { visaCountry: { disconnect: true } },
    });

    return {
      message: "asset type successfuly removed from country",
      status: MessageStatus.SUCCESS,
    };
  }

  async addAssetTypeToCountry(dto: AddTypeToCountryDto): Promise<MessageDto> {
    const addType = await this.prisma.assetType.update({
      where: { id: dto.typeId },
      data: { visaCountry: { connect: { id: dto.countryId } } },
    });

    return {
      message: "asset type successfuly added to country",
      status: MessageStatus.SUCCESS,
    };
  }
}
