import { IsString } from "class-validator";

export class AddTypeToCountryDto {
  @IsString()
  typeId: string;

  @IsString()
  countryId: string;
}
