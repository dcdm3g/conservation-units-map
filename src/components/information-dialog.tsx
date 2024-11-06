'use client'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import { useUnitsStore } from '@/stores/units-store'
import { useMediaQuery } from 'usehooks-ts'

export function InformationDialog() {
	const isTablet = useMediaQuery('(min-width: 768px)')
	const selected = useUnitsStore((store) => store.selected)
	const unselect = useUnitsStore((store) => store.unselect)

	if (isTablet || !selected) {
		return null
	}

	return (
		<Dialog
			open={!!selected}
			onOpenChange={(open) => {
				if (!open) {
					unselect()
				}
			}}
		>
			<DialogContent>
				<DialogTitle>{selected.name}</DialogTitle>
				<DialogDescription>{selected.summary}</DialogDescription>
			</DialogContent>
		</Dialog>
	)
}
