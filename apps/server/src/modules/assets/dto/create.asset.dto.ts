import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateAssetRequestDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AssetsToCreateDto)
  assets: AssetsToCreateDto[];
}

export class AssetsToCreateDto {
  @IsString()
  fileName: string;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  passengerId?: string;

  @IsString()
  @IsOptional()
  visaPassengerId?: string;

  @IsOptional()
  @IsString()
  visaCountryId?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  residencyCountryId?: string;
}

export class CreateAssetsResponseDto {
  assets: CreatedAssetsDto[];
}

export class CreatedAssetsDto {
  id: string;
  fileName: string;
  type: {
    name: string;
    desc: string;
    typeId: string;
  };
  uploadUrl: string;
  passengerId?: string;
  visaPassengerId?: string;
  visaCountryId?: string;
  userId?: string;
  residencyCountryId: string;
}
