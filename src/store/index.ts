import { create } from 'zustand'

import type { Store } from '@/types/store.interface'

export const useStore = create<Store>(set => ({
  isModalOpen: {},
  setIsModalOpen: value => set({ isModalOpen: value })
}))
