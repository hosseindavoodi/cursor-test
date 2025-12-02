export type UserListRequest = {
  page: string,
  perPage: string,
  userRole: string,
}

export type UserListResponse = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  birthdate: string | null;
  nationalCode: string | null;
  email: string | null;
  isEmailVerified: boolean | null;
  phoneNumber: string;
  isPhoneNumberVerified: null | boolean;
  passportFirstName: string | null;
  passportLastName: string | null;
  passportNumber: string | null;
  passportExpiryDate: string | null;
}[]

export type UserProfileResponse = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  birthdate: string | null;
  nationalCode: string | null;
  email: string | null;
  isEmailVerified: boolean | null;
  phoneNumber: string;
  isPhoneNumberVerified: null | boolean;
  passportFirstName: string | null;
  passportLastName: string | null;
  passportNumber: string | null;
  passportExpiryDate: string | null;
  passport: {
    firstName: string;
    lastName: string;
    number: string;
    expiryDate: string;
    image: {
      fileName: string;
      assetId: string;
      preview?: string;
      type: {
        name: string;
        desc: string;
      };
    };
  };
  createdAt: string;
  updatedAt: string;
};

export type UserProfileUpdateRequest = {
  firstName?: string;
  lastName?: string;
  birthdate?: string;
  nationalCode?: string;
  email?: string;
  phoneNumber?: string;
};

export type UserProfileUpdatePassportRequest = {
  passportFirstName?: string;
  passportLastName?: string;
  passportNumber?: string;
  passportExpiryDate?: string;
  passportImage?: string;
};
