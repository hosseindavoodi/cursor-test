import { IsString } from "class-validator";

export class RequestResidencyDto {
  @IsString()
  countryId: string;
}
