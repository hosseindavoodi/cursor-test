import { create } from "zustand";

export type ProductSearchStore = {
  productType: "FLIGHT" | "GROUP_TOUR" | "INDIVIUAL_TOUR" | "HOTEL";

  setStore: {
    (
      partial:
        | ProductSearchStore
        | Partial<ProductSearchStore>
        | ((state: ProductSearchStore) => ProductSearchStore | Partial<ProductSearchStore>),
      replace?: false
    ): void;
    (state: ProductSearchStore | ((state: ProductSearchStore) => ProductSearchStore), replace: true): void;
  };
};

export const useProductSearchStore = create<ProductSearchStore>((set, get) => ({
  productType: "FLIGHT",

  setStore: set,
}));
