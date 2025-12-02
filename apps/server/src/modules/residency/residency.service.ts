import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { CreateResidencyConutryRequestDto, CreateResidencyConutryResponseDto } from "./dto/create.residancy.country.dto";
import {
  GetResidencyByIdResponseDto,
  GetResidencyCountryListRequestDto,
  GetResidencyCountryListResponseDto,
} from "./dto/get.residancy.country.dto";
import { take } from "rxjs";
import { Prisma } from "@sana/db/generated/prisma";
import { MinioService } from "src/modules/assets/minio.service";
import { AssetDto } from "../assets/dto/list.assets.dto";
import { AssetsServices } from "../assets/assets.service";

@Injectable()
export class ResidancyService {
  constructor(
    readonly prisma: PrismaService,
    readonly minio: MinioService,
    readonly assetsService: AssetsServices
  ) {}

  async createCountry(dto: CreateResidencyConutryRequestDto): Promise<CreateResidencyConutryResponseDto> {
    const country = await this.prisma.residencyCountry.create({
      data: {
        countryCode: dto.countryCode,
        countryEnName: dto.countryEnName,
        countryFaName: dto.countryFaName,
        type: {
          createMany: {
            data: dto.types.map((type) => ({ name: type.name, description: type.description, note: type.note })),
          },
        },
      },
    });

    return {
      countryId: country.id,
    };
  }

  async getCountryList(query: GetResidencyCountryListRequestDto): Promise<GetResidencyCountryListResponseDto> {
    const perPage = parseInt(query.perPage);
    const page = parseInt(query.page);

    const where: Prisma.ResidencyCountryWhereInput = {
      countryEnName: query.countryEnName,
      countryFaName: query.countryFaName,
      countryCode: query.countryCode,
      type: {
        some: {
          id: query.typeId,
        },
      },
    };

    const totalCount = await this.prisma.residencyCountry.count({ where: where });

    const countries = await this.prisma.residencyCountry.findMany({
      where: where,
      include: {
        type: true,
        assets: {
          include: {
            type: true,
          },
        },
      },
      skip: (page - 1) * perPage,
      take: perPage,
    });

    const totalPages = Math.ceil(totalCount / perPage);
    const currentPage = page;

    const response: GetResidencyCountryListResponseDto = {
      countries: await Promise.all(
        countries.map(async (country) => ({
          countryCode: country.countryCode,
          countryEnName: country.countryEnName,
          countryFaName: country.countryFaName,
          id: country.id,
          types: country.type,
          assets: await this.assetsService.retrieveAssets({ assets: [{ residencyCountryId: country.id }] }),
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

  async getCountryById(countryId: string): Promise<GetResidencyByIdResponseDto> {
    const country = await this.prisma.residencyCountry.findUnique({ where: { id: countryId }, include: { type: true, assets: true } });

    let response: GetResidencyByIdResponseDto = {
      id: country.id,
      countryCode: country.countryCode,
      countryEnName: country.countryEnName,
      countryFaName: country.countryFaName,
      types: country.type,
      assets: await this.assetsService.retrieveAssets({ assets: [{ residencyCountryId: country.id }] }),
    };

    return response;
  }
}
