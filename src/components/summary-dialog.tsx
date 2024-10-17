import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import { CONSERVATION_UNITS } from '@/constants/conservation-units'
import type { Dispatch, SetStateAction } from 'react'

interface SummaryDialogProps {
	conservationUnity: (typeof CONSERVATION_UNITS)[number]['name']
	setConservationUnity: Dispatch<
		SetStateAction<(typeof CONSERVATION_UNITS)[number]['name']>
	>
}

export function SummaryDialog({
	conservationUnity,
	setConservationUnity,
}: SummaryDialogProps) {
	const unity = CONSERVATION_UNITS.find(
		(unity) => unity.name === conservationUnity,
	)

	if (!unity) {
		return null
	}

	return (
		<Dialog
			open={!!unity}
			onOpenChange={(open) => {
				if (!open) {
					setConservationUnity('')
				}
			}}
		>
			<DialogContent>
				<DialogTitle>{unity.name}</DialogTitle>
				<DialogDescription>{unity.summary}</DialogDescription>
			</DialogContent>
		</Dialog>
	)
}
