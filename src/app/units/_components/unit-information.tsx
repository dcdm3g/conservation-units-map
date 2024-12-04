import { ImageCarousel } from '@/app/units/_components/image-carousel'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { ReactNode } from 'react'

interface UnitInformationProps {
	children: ReactNode
}

export function UnitInformation({ children }: UnitInformationProps) {
	return (
		<ScrollArea className="h-full">
			<ImageCarousel />
			<div>{children}</div>
		</ScrollArea>
	)
}
