import { create } from "zustand";

interface StoreState {
  searchQuery: string;
  selectedPlatforms: string;
  setSearchQuery: (query: string) => void;
  setSelectedPlatforms: (platform: string) => void;
}

export const useSearchStore = create<StoreState>((set) => ({
  searchQuery: "",
  selectedPlatforms: "All",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedPlatforms: (platform) => set({ selectedPlatforms: platform }),
}));
