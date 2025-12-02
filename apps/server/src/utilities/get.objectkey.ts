export const objectKeyGenerator = (params: {
  passengerId?: string;
  visaPassengerId?: string;
  visaCountryId?: string;
  resdiencyCountryId?: string;
  userId?: string;
  fileName: string;
  type: string;
}): {
  objectKey: string;
  folderPath: string;
} => {
  const { resdiencyCountryId, visaCountryId, passengerId, visaPassengerId, userId } = params;

  if (passengerId) {
    return {
      objectKey: `users/passengers/${passengerId}/assets/${params.type}/${params.fileName}`,
      folderPath: `users/passengers/${passengerId}/assets/${params.type}`,
    };
  }
  if (visaPassengerId) {
    return {
      objectKey: `visa/passengers/${visaPassengerId}/assets/${params.type}/${params.fileName}`,
      folderPath: `visa/passengers/${visaPassengerId}/assets/${params.type}`,
    };
  }

  if (visaCountryId) {
    return {
      objectKey: `visa/country/${visaCountryId}/assets/${params.type}/${params.fileName}`,
      folderPath: `visa/country/${visaCountryId}/assets/${params.type}`,
    };
  }

  if (resdiencyCountryId) {
    return {
      objectKey: `residency/country/${resdiencyCountryId}/assets/${params.type}/${params.fileName}`,
      folderPath: `residency/country/${resdiencyCountryId}/assets/${params.type}`,
    };
  }

  if (userId) {
    return {
      objectKey: `users/${userId}/assets/${params.type}/${params.fileName}`,
      folderPath: `users/${userId}/assets/${params.type}`,
    };
  }
  return {
    objectKey: `others/assets/${params.type}/${params.fileName}`,
    folderPath: `others/assets/${params.type}`,
  };
};
