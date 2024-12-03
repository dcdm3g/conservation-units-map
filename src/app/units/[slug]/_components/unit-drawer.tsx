'use client'

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'
import { useRouter } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'

interface UnitDialogProps {
	info: {
		name: string
		summary: string
	}
}

export function UnitDrawer({ info }: UnitDialogProps) {
	const isTablet = useMediaQuery('(min-width: 768px)')
	const router = useRouter()

	return (
		<Drawer
			open={!isTablet}
			onOpenChange={(open) => {
				if (!open) {
					router.replace('/')
				}
			}}
		>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>{info.name}</DrawerTitle>
					<DrawerDescription>{info.summary}</DrawerDescription>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	)
}
