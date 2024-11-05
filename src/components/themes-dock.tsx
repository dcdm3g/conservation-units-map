'use client'

import { Dock, DockItem } from '@/components/ui/dock'
import { useTheme } from 'next-themes'

export function ThemesDock() {
	const { setTheme } = useTheme()

	return (
		<Dock>
			<DockItem onClick={() => setTheme('light')}>Outdoors</DockItem>
			<DockItem onClick={() => setTheme('dark')}>Escuro</DockItem>
		</Dock>
	)
}
