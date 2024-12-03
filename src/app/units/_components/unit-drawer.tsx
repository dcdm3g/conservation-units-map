'use client'

import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { last } from '@/utils/last'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { ImageCarousel } from './image-carousel'

interface UnitDialogProps {
	children: ReactNode
}

export function UnitDrawer({ children }: UnitDialogProps) {
	const isTablet = useMediaQuery('(min-width: 768px)')
	const router = useRouter()

	const pathname = usePathname()
	const unit = last(pathname.split('/'))

	return (
		<Drawer
			open={!isTablet}
			onOpenChange={(open) => {
				if (!open) {
					router.replace('/')
				}
			}}
		>
			<DrawerContent className="p-4">
				<DrawerTitle className="sr-only">{unit}</DrawerTitle>

				<ScrollArea className="h-full">
					<ImageCarousel />
					{children}
				</ScrollArea>
			</DrawerContent>
		</Drawer>
	)
}
