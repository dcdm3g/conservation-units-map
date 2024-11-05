import type { Unit } from '@/interfaces/unit'
import { MapPin } from 'lucide-react'

interface UnitSummaryProps {
	unit: Unit
}

export function UnitSummary({ unit }: UnitSummaryProps) {
	return (
		<div className="flex flex-col gap-4">
			<MapPin className="text-primary size-6" />

			<div className="flex gap-2 items-start">
				<h1 className=" text-2xl font-semibold text-foreground">{unit.name}</h1>
			</div>

			<p className="text-foreground">{unit.summary}</p>
		</div>
	)
}
