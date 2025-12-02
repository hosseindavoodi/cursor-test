import { FlightSorts } from "@sana/types/flight/flight";
import { create } from "zustand";

export type AvailableStore = {
  setStore: {
    (
      partial: AvailableStore | Partial<AvailableStore> | ((state: AvailableStore) => AvailableStore | Partial<AvailableStore>),
      replace?: false
    ): void;
    (state: AvailableStore | ((state: AvailableStore) => AvailableStore), replace: true): void;
  };

  pricingOptions: {
    minPrice: number;
    maxPrice: number;
  };
  timeRangeOptions: {
    minTimeInMinutes: number;
    maxTimeInMinutes: number;
  };
  airlinesOptions: string[];
  baggageOptions: number[];
  filters: {
    price: number[];
    timeRange: number[];
    airlines: string[];
    baggages: number[];
  };

  sort: FlightSorts;

  enablePolling: boolean;
};

export const useAvailableStore = create<AvailableStore>((set, get) => ({
  setStore: set,
  sort: FlightSorts.FROM_LOWEST_PRICE,
  pricingOptions: {
    minPrice: 0,
    maxPrice: 10000000,
  },
  timeRangeOptions: {
    minTimeInMinutes: 0,
    maxTimeInMinutes: 1439,
  },
  airlinesOptions: [],
  baggageOptions: [],

  enablePolling: false,
  filters: {
    price: [0, 10_000_000],
    timeRange: [0, 1439],
    airlines: [],
    baggages: [],
  },
}));
