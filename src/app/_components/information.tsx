'use client'

import { Greeting } from '@/app/_components/greeting'
import { UnitSummary } from '@/app/_components/unit-summary'
import { useUnitsStore } from '@/stores/units-store'

export function Information() {
	const unit = useUnitsStore((store) => store.selected)
	return unit ? <UnitSummary unit={unit} /> : <Greeting />
}
