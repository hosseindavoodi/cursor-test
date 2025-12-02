import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";

export class AddGroupsToCountryRequestDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVisaAgeGroupsDto)
  groups: CreateVisaAgeGroupsDto[];
}

export class AddGroupsToCountryResponseDto {
  @Type(() => GroupsDto)
  groups: GroupsDto[];
}

class GroupsDto {
  id: string;
  startAge: number;
  endAge: number;
  title: string;
}

export class CreateVisaAgeGroupsDto {
  @IsNotEmpty()
  @IsNumber()
  startAge: number;

  @IsNotEmpty()
  @IsNumber()
  endAge: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  // @IsArray()
  // @IsNotEmpty()
  // @Type(() => CreateVisaPricesDto)
  // @ValidateNested({ each: true })
  // prices: CreateVisaPricesDto[];
}
