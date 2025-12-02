import { Type } from "class-transformer";

import { PaginatedResponseDto, PaginationDto } from "src/common/dto/common.dto";
import { VisaDurationDto } from "./create.country.dto";
import { VisaTypes } from "./visa.dto";
import { AssetDto } from "src/modules/assets/dto/list.assets.dto";
import { RetrieveAssetsResponseDto } from "src/modules/assets/dto/retrieve.assets.dto";
import { AssetType } from "@sana/db/generated/prisma";

export class GetVisaAgeGroupsDto {
  id: string;
  startAge: number;
  endAge: number;
  title: string;
  @Type(() => GetVisaPricesDto)
  prices: GetVisaPricesDto[];
}

export class GetVisaPricesDto {
  id: string;
  type: VisaTypes;
  duration?: VisaDuration;
  visaGroupId: string;
  durationId: string;
  priceAmount: number;
  priceUnit: string;
}
export class VisaCountriesDto {
  id: string;
  countryEnName: string;
  countryFaName: string;
  countryCode: string;
  processTime: string;
  isValidForDays: number;
  types: VisaTypes[];
  @Type(() => VisaDurationDto)
  durations: VisaDuration[];
  @Type(() => GetVisaAgeGroupsDto)
  groups: GetVisaAgeGroupsDto[];
  @Type(() => RetrieveAssetsResponseDto)
  assets: RetrieveAssetsResponseDto[];
  requiredAssetTypes: VisaRequiredAssetType[]
}

export class VisaRequiredAssetType {
  type: string
  desc: string
}
export class VisaDuration {
  id: string;
  durationInDays: number;
  countryId: string;
}

export class ListVisaCountriesResponseDto extends PaginatedResponseDto {
  countries: VisaCountriesDto[];
}

export class VisaCountriesQueriesDto extends PaginationDto {
  countryEnName?: string;
  countryFaName?: string;
  countryCode?: string;
}
