import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import { useUnitsStore } from '@/stores/units-store'

export function InformationDialog() {
	const selected = useUnitsStore((store) => store.selected)
	const unselect = useUnitsStore((store) => store.unselect)

	if (!selected) {
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
