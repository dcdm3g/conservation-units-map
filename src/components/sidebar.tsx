import { Greeting } from '@/components/greeting'
import type { Unit } from '@/interfaces/unit'
import { ConservationUnitSummary } from './unit-summary'

interface SidebarProps {
	unit: Unit | null
}

export function Sidebar({ unit }: SidebarProps) {
	return (
		<aside className="basis-96 p-6 bg-card">
			{unit ? <ConservationUnitSummary unit={unit} /> : <Greeting />}
		</aside>
	)
}
