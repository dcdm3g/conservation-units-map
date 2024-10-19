'use client'

import { Sidebar } from '@/components/sidebar'
import { SummaryDialog } from '@/components/summary-dialog'
import { UnitsMap } from '@/components/units-map'
import type { Unit } from '@/interfaces/unit'
import { Fragment, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

export function Application() {
	const [unit, setUnit] = useState<Unit | null>(null)
	const isTablet = useMediaQuery('(min-width: 768px)')

	return (
		<Fragment>
			<UnitsMap setUnit={setUnit} />

			{isTablet ? (
				<Sidebar unit={unit} />
			) : (
				<SummaryDialog unit={unit} setUnit={setUnit} />
			)}
		</Fragment>
	)
}
