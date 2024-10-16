import { create } from "zustand";

interface LanguageStore {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "id",
  setLanguage: (language) => set({ language }),
}));
