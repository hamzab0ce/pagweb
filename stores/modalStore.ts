import { create } from "zustand";
import type { GamesWithLinks } from "@/app/actions/getGames";

interface ModalStore {
  isModalOpen: boolean;
  modalData: GamesWithLinks | null;
  openModal: (data: GamesWithLinks) => void;
  closeModal: () => void;
  setModalData: (data: GamesWithLinks) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalData: null,
  openModal: (data) => set({ isModalOpen: true, modalData: data }),
  closeModal: () => set({ isModalOpen: false, modalData: null }),
  setModalData: (data) => set({ modalData: data }),
}));
