import { create } from "zustand";

interface NavbarStore {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
  isActive: string;
  setIsActive: (isActive: string) => void;
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  isScrolled: false,
  setIsScrolled: (isScrolled) => set({ isScrolled }),
  isActive: "",
  setIsActive: (isActive) => set({ isActive }),
}));
