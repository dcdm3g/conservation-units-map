import { ScrollArea } from '@/components/ui/scroll-area'
import { MapPin } from 'lucide-react'

interface UnitInformationProps {
	info: {
		name: string
		summary: string
	}
}

export function UnitInformation({ info }: UnitInformationProps) {
	return (
		<ScrollArea className="h-full">
			<div className="flex flex-col gap-4">
				<div className="flex gap-2 items-start">
					<h1 className="text-2xl font-semibold text-foreground">
						{info.name}
					</h1>
				</div>

				<p className="text-foreground">{info.summary}</p>
			</div>
		</ScrollArea>
	)
}
