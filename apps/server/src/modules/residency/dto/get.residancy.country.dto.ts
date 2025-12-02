import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { PaginatedResponseDto, PaginationDto } from "src/common/dto/common.dto";
import { ResidencyTypesDto } from "./create.residancy.country.dto";
import { AssetDto, GetAssetsDto } from "src/modules/assets/dto/list.assets.dto";
import { RetrieveAssetsResponseDto } from "src/modules/assets/dto/retrieve.assets.dto";

export class GetResidencyCountryListRequestDto extends PaginationDto {
  @IsOptional()
  @IsString()
  countryEnName?: string;
  @IsOptional()
  @IsString()
  countryFaName?: string;
  @IsOptional()
  @IsString()
  countryCode?: string;
  @IsOptional()
  @IsString()
  typeId?: string;
}

export class GetResidencyCountryListResponseDto extends PaginatedResponseDto {
  countries: ResidencyCountry[];
}

export class ResidencyCountry {
  id: string;
  countryEnName: string;
  countryFaName: string;
  countryCode: string;

  @Type(() => RetrieveAssetsResponseDto)
  assets: RetrieveAssetsResponseDto[];

  @Type(() => ResidencyCountryTypeDto)
  types: ResidencyCountryTypeDto[];
}

export class GetResidencyByIdResponseDto extends ResidencyCountry {}

class ResidencyCountryTypeDto {
  id: string;
  name: string;
  description: string;
  note?: string;
}
