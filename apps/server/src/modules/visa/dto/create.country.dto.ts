import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { VisaTypes } from "./visa.dto";

export class CreateVisaCountryDto {
  @IsString()
  @IsNotEmpty()
  countryFaName: string;

  @IsString()
  @IsNotEmpty()
  countryEnName: string;

  @IsString()
  @IsNotEmpty()
  countryCode: string;

  // @ValidateNested({ each: true })
  @IsArray()
  types: VisaTypes[];

  @IsArray()
  requiredAssetTypes: string[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => VisaDurationDto)
  durations: VisaDurationDto[];

  @IsNotEmpty()
  @IsString()
  processTime: string;

  @IsNumber()
  @IsNotEmpty()
  isValidForDays: number;

  @IsBoolean()
  immediatePayment: boolean;
}

export class CreateVisaCountryResponseDto {
  countryId: string;
}

// export class CreateVisaPricesDto {
//   @IsEnum(VisaTypes)
//   @IsNotEmpty()
//   type: VisaTypes;

//   @IsString()
//   @IsNotEmpty()
//   durationId: string;

//   @IsNotEmpty()
//   @IsNumber()
//   priceAmount: number;

//   @IsString()
//   @IsNotEmpty()
//   priceUnit: string;
// }

export class VisaDurationDto {
  @IsNumber()
  durationInDays: number;
}
