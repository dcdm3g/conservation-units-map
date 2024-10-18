import { Greeting } from '@/components/greeting'
import type { Unit } from '@/interfaces/unit'
import { UnitSummary } from '@/components/unit-summary'

interface SidebarProps {
	unit: Unit | null
}

export function Sidebar({ unit }: SidebarProps) {
	return (
		<aside className="p-6 bg-card absolute left-4 inset-y-4 w-96 z-50 rounded-lg shadow-md">
			{unit ? <UnitSummary unit={unit} /> : <Greeting />}
		</aside>
	)
}
