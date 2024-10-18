import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import type { Unit } from '@/interfaces/unit'
import type { Dispatch, SetStateAction } from 'react'

interface SummaryDialogProps {
	unit: Unit | null
	setUnit: Dispatch<SetStateAction<Unit | null>>
}

export function SummaryDialog({ unit, setUnit }: SummaryDialogProps) {
	if (!unit) {
		return null
	}

	return (
		<Dialog
			open={!!unit}
			onOpenChange={(open) => {
				if (!open) {
					setUnit(null)
				}
			}}
		>
			<DialogContent>
				<DialogTitle>{unit.name}</DialogTitle>
				<DialogDescription>{unit.summary}</DialogDescription>
			</DialogContent>
		</Dialog>
	)
}
