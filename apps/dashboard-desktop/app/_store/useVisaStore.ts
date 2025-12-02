import { create } from "zustand";

type VisaForm = {
  country?: string;
  visaType?: string;
  visaTime?: string;
  adults?: number;
  children?: number;
};

type VisaStore = {
  form: VisaForm;
  setForm: (data: Partial<VisaForm>) => void;
};

export const useVisaStore = create<VisaStore>((set) => ({
  form: {},
  setForm: (data) => set((state) => ({ form: { ...state.form, ...data } })),
}));
