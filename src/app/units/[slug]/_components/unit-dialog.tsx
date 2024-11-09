'use client'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'

interface UnitDialogProps {
	info: {
		name: string
		summary: string
	}
}

export function UnitDialog({ info }: UnitDialogProps) {
	const isTablet = useMediaQuery('(min-width: 768px)')
	const router = useRouter()

	return (
		<Dialog
			open={!isTablet}
			onOpenChange={(open) => {
				if (!open) {
					router.back()
				}
			}}
		>
			<DialogContent>
				<DialogTitle>{info.name}</DialogTitle>
				<DialogDescription>{info.summary}</DialogDescription>
			</DialogContent>
		</Dialog>
	)
}
