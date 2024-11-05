import { Greeting } from '@/app/_components/greeting'
import { UnitSummary } from '@/app/_components/unit-summary'
import type { Unit } from '@/interfaces/unit'
import { useUnitsStore } from '@/stores/units-store'

export function InformationBar() {
	const unit = useUnitsStore((store) => store.selected)

	return (
		<aside className="p-6 bg-card absolute left-4 inset-y-4 w-96 z-40 rounded-lg shadow-md">
			{unit ? <UnitSummary unit={unit} /> : <Greeting />}
		</aside>
	)
}
