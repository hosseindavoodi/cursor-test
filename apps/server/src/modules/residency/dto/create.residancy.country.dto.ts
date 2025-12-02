import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateResidencyConutryRequestDto {
  @IsString()
  @IsNotEmpty()
  countryFaName: string;

  @IsString()
  @IsNotEmpty()
  countryEnName: string;

  @IsString()
  @IsNotEmpty()
  countryCode: string;

  @Type(() => ResidencyTypesDto)
  types: ResidencyTypesDto[];
}

export class CreateResidencyConutryResponseDto {
  countryId: string;
}

export class ResidencyTypesDto {
  name: string;
  description: string;
  note?: string;
}
