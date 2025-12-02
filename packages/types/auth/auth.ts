export type AuthLoginRequest = {
  email?: string;
  phoneNumber?: string;
  otpChannel: "whatsapp" | "sms" | "email" | "password";
  password?: string;
};

export type AuthLoginResponse = {
  verificationId: string;
  validUntil: string;
};

export type AuthLoginByPasswordResponse = {
  access_token: string;
  refresh_token: string;
};

export type AuthVerifyRequest = {
  code: string;
  verificationId: string;
};

export type AuthVerifyResponse = {
  access_token: string;
  refresh_token: string;

  user: {
    id: string;
    email: string | null;
    phoneNumber: string | null;
    isEmailVerified: null | boolean;
    isPhoneNumberVerified: null | boolean;
    createdAt: string;
    isActive: boolean;
    roles: string[];
  };

  expires_in: number;
};

export type AuthLogoutRequest = {};

export type AuthLogoutResponse = {
  message: string;
};

export type AuthProfileRequest = {};

export type AuthProfileResponse = {
  user: {
    id: string;
    email: string | null;
    phoneNumber: string | null;
    isEmailVerified: boolean | null;
    isPhoneNumberVerified: boolean | null;
    createdAt: string;
    isActive: boolean;
    roles: string[];
  };
  message: string;
};
