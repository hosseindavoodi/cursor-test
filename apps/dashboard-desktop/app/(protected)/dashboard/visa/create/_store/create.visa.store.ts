import { RefObject } from "react";
import { create } from "zustand";

export type CreateResidencyStore = {
    setStore: {
        (partial: CreateResidencyStore | Partial<CreateResidencyStore> | ((state: CreateResidencyStore) => CreateResidencyStore | Partial<CreateResidencyStore>), replace?: false): void;
        (state: CreateResidencyStore | ((state: CreateResidencyStore) => CreateResidencyStore), replace: true): void;
    }
    flushStore: () => void,
    step: number,
    countryFormRef: RefObject<HTMLFormElement> | null
    countryId: string | null,
    ageGroupFormRef?: RefObject<HTMLFormElement> | null
    cardUrl: string | null,
    headerUrl: string | null
}

export const useCreateVisaStore = create<CreateResidencyStore>((set, get) => ({
    setStore: set,
    flushStore: () => {
        set({
            step: 1,
            countryFormRef: null,
            countryId: null,
            ageGroupFormRef: null,
            cardUrl: null,
            headerUrl: null
        })
    },
    step: 1,
    countryFormRef: null,
    countryId: null,
    ageGroupFormRef: null,
    cardUrl: null,
    headerUrl: null
}))