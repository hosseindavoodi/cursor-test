import { IsArray, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { VisaTypes } from "./visa.dto";
import { Type } from "class-transformer";
import { VisaDurationDto } from "./create.country.dto";

export class UpdateCountryDto {
  @IsOptional()
  @IsString()
  countryEnName: string;
  @IsOptional()
  @IsString()
  countryFaName: string;
  @IsOptional()
  @IsString()
  countryCode: string;

  @IsOptional()
  @IsString()
  processTime: string;

  @IsOptional()
  @IsNumber()
  isValidForDays: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VisaDurationDto)
  durations: VisaDurationDto[];

  @IsArray()
  @IsOptional()
  @MinLength(0)
  types: VisaTypes[];

  @IsOptional()
  @IsArray()
  requiredAssetTypes: string[]
}
