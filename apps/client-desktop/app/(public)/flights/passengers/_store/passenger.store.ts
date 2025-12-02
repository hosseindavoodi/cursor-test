import { FlightSearchPayload } from "@sana/types/flight/flight";
import { create } from "zustand";

export type PassengersStore = {
  offerId: string | null;
  requestedPayload: FlightSearchPayload | null;
  validateOnChange: boolean;
  setStore: {
    (
      partial: PassengersStore | Partial<PassengersStore> | ((state: PassengersStore) => PassengersStore | Partial<PassengersStore>),
      replace?: false
    ): void;
    (state: PassengersStore | ((state: PassengersStore) => PassengersStore), replace: true): void;
  };
};

export const usePassengersStore = create<PassengersStore>((set, get) => ({
  offerId: null,
  requestedPayload: null,
  validateOnChange: false,
  setStore: set,
}));
