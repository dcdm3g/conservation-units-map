'use client'

import { Dock, DockItem } from '@/components/ui/dock'
import { useThemeStore } from '@/stores/theme-store'

export function ThemesDock() {
	const { setTheme } = useThemeStore()

	return (
		<Dock>
			<DockItem onClick={() => setTheme('outdoors')}>Outdoors</DockItem>
			<DockItem onClick={() => setTheme('dark')}>Escuro</DockItem>
		</Dock>
	)
}
