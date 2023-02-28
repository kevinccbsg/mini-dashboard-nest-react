import { create } from 'zustand'

interface UIState {
  modalId: string | null
  setModal: (value: string | null) => void
}

const useUIStore = create<UIState>()((set) => ({
  modalId: null,
  setModal: (value) => set(() => ({
    modalId: value,
  })),
}))

export default useUIStore;
