'use client'

import { Drawer, DrawerContent } from '@/components/ui/drawer'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface UnitDialogProps {
	children: ReactNode
}

export function UnitDrawer({ children }: UnitDialogProps) {
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
			<DrawerContent>{children}</DrawerContent>
		</Drawer>
	)
}
