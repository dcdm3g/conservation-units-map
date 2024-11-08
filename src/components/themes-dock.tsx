'use client'

import { Dock, DockItem } from '@/components/ui/dock'
import { styles } from '@/constants/styles'
import { useLocalStorage } from 'usehooks-ts'

export function StylesDock() {
	const [, setStyle] = useLocalStorage<(typeof styles)[keyof typeof styles]>(
		'style',
		styles.outdoors,
	)

	return (
		<Dock>
			<DockItem onClick={() => setStyle(styles.outdoors)}>Outdoors</DockItem>
			<DockItem onClick={() => setStyle(styles.dark)}>Escuro</DockItem>
		</Dock>
	)
}
