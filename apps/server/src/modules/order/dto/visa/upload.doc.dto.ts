import { Type } from "class-transformer";
import { ArrayMinSize, IS_ALPHA, IsArray, IsNotEmpty, IsOptional, IsString, Length, Min, MinLength, ValidateNested } from "class-validator";

export type UploadPassengerDocumentsDto = {
  filename: string;
  mimetype: string;
  orderNumber: number;
  passengerId: string;
};

export class GetUploadDocumentUrlRequestDto {
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => Assets)
  @ValidateNested({ each: true })
  assets: Assets[];
}

export class GetUploadDocumentUrlResponseDto {
  uploadUrls: Urls[];
}

class Urls {
  fileName: string;
  extension: string;
  objectKey: string;
  uploadUrl: string;
  passengerId: string;
  assetId: string;
}

class Assets {
  @IsOptional()
  @IsString()
  objectKey?: string;

  @IsOptional()
  @IsString()
  id?: string;
}
