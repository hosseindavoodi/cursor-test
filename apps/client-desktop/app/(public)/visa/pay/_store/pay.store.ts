import { create } from "zustand";

export type PayStore = {
  wallet: boolean;
  setStore: {
    (partial: PayStore | Partial<PayStore> | ((state: PayStore) => PayStore | Partial<PayStore>), replace?: false): void;
    (state: PayStore | ((state: PayStore) => PayStore), replace: true): void;
  };
};
export const usePayStore = create<PayStore>((set, get) => ({
  wallet: false,
  setStore: set,
}));
