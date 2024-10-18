import type { Unit } from "@/interfaces/unit"

interface UnitSummaryProps {
	unit: Unit
}

export function ConservationUnitSummary({
	unit,
}: UnitSummaryProps) {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold text-foreground">
				{unit.name}
			</h1>

			<p className="text-foreground">{unit.summary}</p>
		</div>
	)
}
