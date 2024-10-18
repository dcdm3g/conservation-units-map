import { Greeting } from '@/components/greeting'
import { ConservationUnitSummary } from './unit-summary'
import type { Unit } from '@/interfaces/unit'

interface SidebarProps {
	unit: Unit | null
}

export function Sidebar({ unit }: SidebarProps) {
	return (
		<aside className="basis-96 p-6 bg-card">
			{unit ? (
				<ConservationUnitSummary unit={unit} />
			) : (
				<Greeting />
			)}
		</aside>
	)
}
