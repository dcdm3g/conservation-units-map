import { ScrollArea } from '@/components/ui/scroll-area'
import type { ReactNode } from 'react'

interface UnitInformationProps {
	children: ReactNode
}

export function UnitInformation({ children }: UnitInformationProps) {
	return (
		<ScrollArea className="h-full">
			<div className="flex flex-col gap-4">{children}</div>
		</ScrollArea>
	)
}
