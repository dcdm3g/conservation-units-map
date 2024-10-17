import { CONSERVATION_UNITS } from '@/constants/conservation-units'

interface ConservationUnitSummaryProps {
	conservationUnity: (typeof CONSERVATION_UNITS)[number]['name']
}

export function ConservationUnitSummary({
	conservationUnity,
}: ConservationUnitSummaryProps) {
	const { category, summary } = CONSERVATION_UNITS.find(
		(unit) => unit.name === conservationUnity,
	) as (typeof CONSERVATION_UNITS)[number]

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold text-foreground">
				{conservationUnity}
			</h1>

			<p className="text-foreground">{summary}</p>
		</div>
	)
}
