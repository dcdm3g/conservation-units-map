import type { Unit } from '@/interfaces/unit'
import { create } from 'zustand'

interface UnitsState {
	selected: Unit | null
	select: (unit: Unit) => void
	unselect: () => void
}

export const useUnitsStore = create<UnitsState>((set) => ({
	selected: null,
	select: (unit: Unit) => set({ selected: unit }),
	unselect: () => set({ selected: null }),
}))
