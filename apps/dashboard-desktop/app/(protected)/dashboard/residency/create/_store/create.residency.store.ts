import { RefObject } from "react";
import { create } from "zustand";

export type CreateResidencyStore = {
    setStore: {
        (partial: CreateResidencyStore | Partial<CreateResidencyStore> | ((state: CreateResidencyStore) => CreateResidencyStore | Partial<CreateResidencyStore>), replace?: false): void;
        (state: CreateResidencyStore | ((state: CreateResidencyStore) => CreateResidencyStore), replace: true): void;
    }
    flushStore: () => void,
    step: number,
    countryId: string | null
    headerUrl: string | null
    cardUrl: string | null
}

export const useCreateResidencyStore = create<CreateResidencyStore>((set, get) => ({
    setStore: set,
    flushStore: () => {
        set({
            step: 1,
            countryId: null,
        })
    },
    step: 1,
    countryId: null,
    headerUrl: null,
    cardUrl: null
}))