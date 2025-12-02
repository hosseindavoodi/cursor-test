import { VisaConfirmPassengers, VisaPassenger, VisaPassengerAssets } from "@sana/types/order/visa";
import { create } from "zustand";

export type VisaConfirmStore = {
  passengers: VisaConfirmPassengers[];

  updatePassenger: <K extends keyof VisaConfirmPassengers>(key: K, value: VisaConfirmPassengers[K], index: number) => void;

  validations: Partial<Record<keyof VisaConfirmPassengers, { message: string; error: boolean }>>[];

  assetsValidations: { type: string; passengerId: string; error: { error: boolean; message: string } }[];

  realTimeValidation: boolean;

  updatePassengerAssets: (asset: VisaPassengerAssets) => void;

  passengerAssets: VisaPassengerAssets[];

  setStore: {
    (
      partial: VisaConfirmStore | Partial<VisaConfirmStore> | ((state: VisaConfirmStore) => VisaConfirmStore | Partial<VisaConfirmStore>),
      replace?: false
    ): void;
    (state: VisaConfirmStore | ((state: VisaConfirmStore) => VisaConfirmStore), replace: true): void;
  };
};

export const useVisaConfirmStore = create<VisaConfirmStore>((set, get) => ({
  passengers: [],
  passengerAssets: [],
  assetsValidations: [],

  updatePassenger: <K extends keyof VisaConfirmPassengers>(key: K, value: VisaConfirmPassengers[K], index: number) => {
    set((state) => {
      const newPassengers = [...state.passengers];
      if (newPassengers[index]) {
        newPassengers[index] = { ...newPassengers[index], [key]: value };
      }
      return { passengers: newPassengers };
    });
  },

  updatePassengerAssets: (asset: VisaPassengerAssets) => {
    set((state) => {
      const newAssets = [...state.passengerAssets];

      const assetIndex = newAssets.findIndex((a) => a.visaPassengerId === asset.visaPassengerId && a.type === asset.type);

      newAssets[assetIndex] = { ...newAssets[assetIndex], ...asset };

      return { passengerAssets: newAssets };
    });
  },

  realTimeValidation: false,
  validations: [],
  setStore: set,
}));
