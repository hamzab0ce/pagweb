import { ITEMS_PER_PAGE } from "@/const/itemPerPage";
import { create } from "zustand";

interface PaginationStore {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  setTotalPages: (total: number) => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 1,
  itemsPerPage: ITEMS_PER_PAGE,
  totalPages: 1,
  setPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: Math.ceil(total / ITEMS_PER_PAGE) }),
}));
