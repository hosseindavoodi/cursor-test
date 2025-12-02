import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GetAssetsDto {
  @ApiPropertyOptional({ description: "Asset ID" })
  @IsString()
  assetId?: string;
}

export class AssetDto {
  fileName: string;
  previewUrl: string;
  assetId: string;
  type: {
    name: string;
    desc: string;
    typeId: string;
  };
}
