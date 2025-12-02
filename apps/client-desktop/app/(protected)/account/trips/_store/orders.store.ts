import { Order, ProductType } from "@sana/types/order/order";
import { create } from "zustand";

export type OrderStore = {
  filters: {
    orderNumber: string;
    productType: ProductType | "ALL";
    fromDate?: string;
    toDate?: string;
    // page: number;
    // perPage: number;
  };

  setStore: {
    (partial: OrderStore | Partial<OrderStore> | ((state: OrderStore) => OrderStore | Partial<OrderStore>), replace?: false): void;
    (state: OrderStore | ((state: OrderStore) => OrderStore), replace: true): void;
  };

  selectedOrder: Order | null;

  resetFilters: () => void;
};

export const useOrderStore = create<OrderStore>((set, get) => ({
  filters: {
    orderNumber: "",
    productType: "ALL",
    // page: 1,
    // perPage: 3,
  },

  setStore: set,

  selectedOrder: null,

  resetFilters() {
    let { filters } = get();

    filters.orderNumber = "";
    filters.fromDate = undefined;
    filters.toDate = undefined;
    filters.productType = "ALL";

    return set({ filters: filters });
  },
}));
