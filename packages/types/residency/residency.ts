import { Asset } from "../assets/assets";
import { PaginatedResult } from "../common/common";

export type ResidencyCountryListQueryKeys = {
  page: number;
  perPage: number;
  countryEnName?: string;
  countryFaName?: string;
  countryCode?: string;
  typeId?: string;
};

export type ResidencyCountryListResponse = {
  countries: ResidencyCountry[];
} & PaginatedResult;

export type ResidencyCountry = {
  id: string;
  countryEnName: string;
  countryFaName: string;
  countryCode: string;
  assets: Asset[];
  types: ResidencyType[];
};

export type ResidencyType = {
  id: string;
  name: string;
  description: string;
  note: string;
};

export type CreateResidencyCountryRequest = {
  countryEnName: string;
  countryFaName: string;
  countryCode: string;
  types: { name: string; description: string; note: string }[];
};

export type CreateResidencyCountryResponse = {
  countryId: string;
};
