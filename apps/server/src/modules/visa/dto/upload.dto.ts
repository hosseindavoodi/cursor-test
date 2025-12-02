import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export enum VisaCountryImageTypes {
  THUMBNAIL = "THUMBNAIL",
  HEADER = "HEADER",
  FLAG = "FLAG",
}

export class RequestVisaCountryImageUploadUrlDto {
  @IsEnum(VisaCountryImageTypes)
  type: VisaCountryImageTypes;
  @IsString()
  @IsNotEmpty()
  countryId: string;
  @IsString()
  @IsNotEmpty()
  fileName: string;
}

export class RequestVisaCountryImageUploadUrlResponseDto {
  @IsEnum(VisaCountryImageTypes)
  type: VisaCountryImageTypes;
  countryId: string;
  fileName: string;
  uploadUrl: string;
}
