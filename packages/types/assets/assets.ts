export type CreateAssetPayload = {
  assets: CreateAssetPayloadItem[];
};

export type CreateAssetPayloadItem = {
  fileName: string;
  type: string;
  passengerId?: string;
  visaPassengerId?: string;
  visaCountryId?: string;
  userId?: string;
  residencyCountryId?: string;
};

export type CreateAssetResponse = {
  assets: CreateAssetResponseItem[];
};

export type CreateAssetResponseItem = {
  id: string;
  fileName: string;
  type: {
    name: string;
    desc: string;
    typeId: string;
  };
  uploadUrl: string;
  passengerId?: string;
  visaPassengerId?: string;
  visaCountryId?: string;
  residencyCountryId: string;
};

export type Asset = {
  fileName: string;
  assetId: string;
  visaPassengerId?: string;
  passengerId?: string;
  userId?: string;
  visaCountryId?: string;
  residencyCountryId?: string;
  preview: string;
  type: {
    name: string;
    desc: string;
  };
};
