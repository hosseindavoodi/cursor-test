import { create } from "zustand";

export enum SignInStep {
  CheckPhone,
  ConfirmPhoneCode,
  GetEmail,
  ConfirmEmailCode,
  ConfirmWhatsappCode,
  Done,
}

interface SignInState {
  step: SignInStep;
  phone: string;
  email: string;
  isIranNumber: boolean | null;
  isValid: boolean;
  openSignInDialog: boolean;

  setPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  setIsIranNumber: (value: boolean) => void;
  setIsValid: (value: boolean) => void;
  goToStep: (step: SignInStep) => void;
  reset: () => void;

  validatePhone: (value: string) => void;
  checkIranNumber: (value: string) => void;
  setOpenSignInDialog: (value: boolean) => void;
}

export const useSignInStore = create<SignInState>((set) => ({
  step: SignInStep.CheckPhone,
  phone: "",
  email: "",
  isIranNumber: null,
  isValid: true,
  openSignInDialog: false,

  setPhone: (phone) => set({ phone }),
  setEmail: (email) => set({ email }),
  setIsIranNumber: (value) => set({ isIranNumber: value }),
  setIsValid: (value) => set({ isValid: value }),
  goToStep: (step) => set({ step }),
  setOpenSignInDialog: (value) => set({ openSignInDialog: value }),

  reset: () =>
    set({
      step: SignInStep.CheckPhone,
      phone: "",
      email: "",
      isIranNumber: null,
      isValid: true,
    }),

  validatePhone: (value: string) => {
    const trimmed = value.trim();
    const valid = trimmed.length >= 8 && trimmed !== "0" && trimmed !== "";
    set({ isValid: valid });
  },

  checkIranNumber: (value) => {
    const iran =
      value.startsWith("+98") ||
      value.startsWith("98") ||
      value.startsWith("0098");
    set({ isIranNumber: iran });
  },
}));
