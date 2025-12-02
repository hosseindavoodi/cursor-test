import { VisaDuration, VisaGroups, VisaPrices, VisaTypes } from "@sana/db/generated/prisma";
import { AssetDto } from "src/modules/assets/dto/list.assets.dto";

export class GetVisaCountryByIdResponseDto {
  countryId: string;
  countryEnName: string;
  countryFaName: string;
  countryCode: string;
  processTime: string;
  isValidForDays: number;
  type: VisaTypes[];
  assets: AssetDto[];
  durations: VisaDuration[];
  groups: VisaGroups & { prices: VisaPrices[] };
}
