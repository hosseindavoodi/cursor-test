import { HttpException } from "@nestjs/common";
import { AssetsToCreateDto, CreateAssetRequestDto } from "src/modules/assets/dto/create.asset.dto";

export function validateAssetsList(listDto: CreateAssetRequestDto): boolean | string {
  if (!Array.isArray(listDto.assets) || listDto.assets.length === 0) {
    return "The assets list must be a non-empty array.";
  }

  for (let i = 0; i < listDto.assets.length; i++) {
    const dto = listDto.assets[i];

    const idValidation = validateOnlyOneId(dto);
    if (typeof idValidation === "string") {
      throw new HttpException(`Asset at index ${i}: ${idValidation}`, 400);
    }
  }

  return true;
}

export function validateOnlyOneId(dto: Partial<AssetsToCreateDto>): boolean | string {
  const fields = ["passengerId", "visaPassengerId", "visaCountryId", "userId", "residencyCountryId"];

  let count = 0;
  for (const field of fields) {
    const value = dto[field as keyof Partial<AssetsToCreateDto>] as string | undefined;
    if (value && value.trim() !== "") {
      count++;
    }
  }

  if (count > 1) {
    return "Only one of passengerId, visaPassengerId, visaCountryId, userId, or residencyCountryId can be provided.";
  }

  return true;
}
