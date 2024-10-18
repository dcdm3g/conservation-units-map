'use client'

import { Sidebar } from '@/components/sidebar'
import { SummaryDialog } from '@/components/summary-dialog'
import { UnitsMap } from '@/components/units-map'
import type { Unit } from '@/interfaces/unit'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

export default function Home() {
	const [unit, setUnit] = useState<Unit | null>(null)

	const isTablet = useMediaQuery('(min-width: 768px)')

	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-50 flex">
			<UnitsMap setUnit={setUnit} />

			{isTablet ? (
				<Sidebar unit={unit} />
			) : (
				<SummaryDialog unit={unit} setUnit={setUnit} />
			)}
		</div>
	)
}
