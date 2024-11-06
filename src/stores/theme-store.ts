import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const themes = {
	outdoors: 'mapbox://styles/mapbox/outdoors-v11',
	dark: 'mapbox://styles/mapbox/dark-v10',
} as const

interface ThemeState {
	theme: (typeof themes)[keyof typeof themes]
	setTheme: (theme: keyof typeof themes) => void
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			theme: themes.outdoors,
			setTheme: (theme) => set({ theme: themes[theme] }),
		}),
		{ name: 'theme' },
	),
)
