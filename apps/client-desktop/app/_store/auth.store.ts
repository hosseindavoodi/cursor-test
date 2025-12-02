import { create } from "zustand";

export type AuthStore = {
  step: "PHONE" | "OTP" | "CHANGE_METHOD";

  countryCode: string;
  dialCode: string;
  phoneNumber: string;
  timer: number;
  validForSeconds: number;
  otpChannel: "whatsapp" | "sms" | "email";
  email: string;
  verificationId: string;
  otp: string;

  openAuthDialog: boolean;

  setStore: {
    (partial: AuthStore | Partial<AuthStore> | ((state: AuthStore) => AuthStore | Partial<AuthStore>), replace?: false): void;
    (state: AuthStore | ((state: AuthStore) => AuthStore), replace: true): void;
  };
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  step: "PHONE",

  email: "",
  countryCode: "",
  timer: 120,
  validForSeconds: 0,
  openAuthDialog: false,
  dialCode: "",
  otp: "",
  phoneNumber: "",
  otpChannel: "sms",
  verificationId: "",

  setStore: set,
}));
