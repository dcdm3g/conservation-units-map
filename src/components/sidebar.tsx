import { Greeting } from '@/components/greeting'
import type { CONSERVATION_UNITS } from '@/constants/conservation-units'
import { ConservationUnitSummary } from './conservation-unit-summary'

interface SidebarProps {
	conservationUnity: (typeof CONSERVATION_UNITS)[number]['name']
}

export function Sidebar({ conservationUnity }: SidebarProps) {
	console.log(conservationUnity)

	return (
		<aside className="basis-96 p-6 bg-card">
			{conservationUnity ? (
				<ConservationUnitSummary conservationUnity={conservationUnity} />
			) : (
				<Greeting />
			)}
		</aside>
	)
}
