import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";

export class RetrieveAssetsRequestDto {
  @IsArray()
  @Type(() => Assets)
  @ValidateNested({ each: true })
  assets: Assets[];
}

export class Assets {
  @IsString()
  @IsOptional()
  assetId?: string;

  @IsString()
  @IsOptional()
  objectKey?: string;

  @IsString()
  @IsOptional()
  visaCountryId?: string;

  @IsString()
  @IsOptional()
  visaPassengerId?: string;

  @IsString()
  @IsOptional()
  residencyCountryId?: string;

  @IsString()
  @IsOptional()
  passengerId?: string;

  @IsString()
  @IsOptional()
  userId?: string;
}

export class RetrieveAssetsResponseDto {
  fileName: string;
  assetId: string;
  visaPassengerId?: string;
  passengerId?: string;
  userId: string;
  visaCountryId?: string;
  residencyCountryId?: string;
  preview: string;
  type: {
    name: string;
    desc: string;
  };
}

export function validateRetrieveAssetsRequestDto(dto: { assets: Assets[] }) {
  // Check if dto is an object
  if (typeof dto !== "object" || dto === null) {
    return { isValid: false, error: "DTO must be an object" };
  }

  // Check if assets is an array
  if (!Array.isArray(dto.assets)) {
    return { isValid: false, error: "assets must be an array" };
  }

  const propertiesToCheck = ["assetId", "objectKey", "visaCountryId", "visaPassengerId", "residencyCountryId", "passengerId", "userId"];

  for (let i = 0; i < dto.assets.length; i++) {
    const asset = dto.assets[i];
    if (typeof asset !== "object" || asset === null) {
      return {
        isValid: false,
        error: `assets[${i}] must be an object`,
      };
    }

    const filledProperties = [];
    for (const prop of propertiesToCheck) {
      const value = asset[prop];
      if (value !== undefined && value !== null) {
        if (typeof value !== "string" || value.trim() === "") {
          return {
            isValid: false,
            error: `assets[${i}].${prop} must be a non-empty string if provided`,
          };
        }
        filledProperties.push(prop);
      }
    }

    if (filledProperties.length !== 1) {
      return {
        isValid: false,
        error: `assets[${i}] must have exactly one of the following properties provided and non-empty: ${propertiesToCheck.join(", ")}`,
      };
    }
  }

  // If all checks pass
  return { isValid: true };
}
