export type VisaCountryListQueries = {
  page: number;
  perPage: number;
  countryEnName?: string;
  countryFaName?: string;
  countryCode?: string;
};

export type VisaCountryListResponse = {
  countries: VisaCountry[];
  pagination: {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};

export type VisaCountry = {
  id: string;
  countryEnName: string;
  countryFaName: string;
  countryCode: string;
  processTime: string;
  isValidForDays: number;
  types: VisaType[];
  assets: {
    fileName: string;
    preview: string;
    assetId: string;
    type: {
      name: string;
      desc: string;
    };
  }[];
  durations: { id: string; durationInDays: number; countryId: string }[];
  groups: {
    id: string;
    startAge: number;
    endAge: number;
    title: string;
    prices: {
      id: string;
      type: VisaType;
      duration: {
        id: string;
        durationInDays: number;
        countryId: string;
      };
      visaGroupId: string;
      durationId: string;
      priceAmount: number;
      priceUnit: string;
    }[];
  }[];
  requiredAssetTypes: {
    type: string,
    desc: string
  }[]
};

export type VisaGroupFullResponse = {
  id: string;
  startAge: number;
  endAge: number;
  title: string;
  prices: {
    id: string;
    type: VisaType;
    duration: {
      id: string;
      durationInDays: number;
      countryId: string;
    };
    visaGroupId: string;
    durationId: string;
    priceAmount: number;
    priceUnit: string;
  }[];

}

export type VisaCreateCountryPayload = {
  countryFaName: string;
  countryEnName: string;
  countryCode: string;
  durations: { durationInDays: number }[];
  types: string[];
  requiredAssetTypes?: string[];
  processTime: string;
  isValidForDays: number;
  immediatePayment: boolean;
};

export type VisaCreateCountryResponse = {
  countryId: string;
};

export type VisaCreateGroupPayload = {
  groups: VisaGroup[];
};

export type VisaCreateGroupResponse = {
  groups: VisaGroupResponse[];
};

export type VisaGroup = {
  startAge?: number;
  endAge?: number;
  title?: string;
};

export type VisaGroupResponse = {
  id: string;
  startAge: number;
  endAge: number;
  title: string;
};

export type VisaType = "SINGLE" | "MULTI" | "BUSSINES" | "TOURIST" | "STUDENT" | "TRANSIT" | "JOBPERMIT";

export type VisaDetailDuration = {
  id: string;
  durationInDays: number;
  countryId: string;
};

export type VisaDetailPrice = {
  id: string;
  type: VisaType;
  duration: VisaDetailDuration;
  visaGroupId: string;
  durationId: string;
  priceAmount: number;
  priceUnit: string;
};

export type VisaDetailGroup = {
  id: string;
  startAge: number;
  endAge: number;
  title: string;
  prices: VisaDetailPrice[];
};

export type VisaDetailResponse = {
  id: string;
  countryEnName: string;
  countryFaName: string;
  countryCode: string;
  processTime: string;
  isValidForDays: number;
  types: VisaType[];
  durations: VisaDetailDuration[];
  groups: VisaDetailGroup[];
  assets: { fileName: string; assetId: string; type: { name: string; desc: string }; preview: string }[];
};

export type VisaCreatePricesPayload = {
  groups: VisaPriceGroup[];
};

export type VisaPriceGroup = {
  groupId: string;
  prices: VisaPrice[];
};

export type VisaPrice = {
  priceAmount: number | undefined;
  priceUnit: string;
  durationId: string;
  type: string;
};

export type RequestVisaOrderPayload = {
  countryId: string;
  visaType: VisaType;
  durationId: string;
  passengers: {
    groupId: string;
    count: number;
  }[];
};

export type RequestVisaOrderResponse = {
  orderNumber: number;
  orderId: string;
  message: string;
};

export type VisaCountryPartialUpdatePayload = {
  countryFaName?: string;
  countryEnName?: string;
  countryCode?: string;
  processTime?: string;
  isValidForDays?: number;
  types?: string[];
  requiredAssetTypes?: string[];
  durations?: { durationInDays: number }[];
  immediatePayment?: boolean;
}