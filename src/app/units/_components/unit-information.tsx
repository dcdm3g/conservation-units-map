import { ImageCarousel } from '@/app/units/_components/image-carousel'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { ReactNode } from 'react'

interface UnitInformationProps {
	children: ReactNode
}

export function UnitInformation({ children }: UnitInformationProps) {
	return (
		<ScrollArea className="h-full">
			<div className="flex flex-col gap-4">
				<ImageCarousel />
				<div>{children}</div>
			</div>
		</ScrollArea>
	)
}
