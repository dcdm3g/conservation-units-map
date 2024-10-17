'use client'

import { ConservationUnitsMap } from '@/components/conservation-units-map'
import { Sidebar } from '@/components/sidebar'
import { SummaryDialog } from '@/components/summary-dialog'
import type { CONSERVATION_UNITS } from '@/constants/conservation-units'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

export default function Home() {
	const [conservationUnity, setConservationUnity] =
		useState<(typeof CONSERVATION_UNITS)[number]['name']>('')

	const isTablet = useMediaQuery('(min-width: 768px)')

	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-50 flex relative">
			<ConservationUnitsMap setConservationUnit={setConservationUnity} />

			{isTablet ? (
				<Sidebar conservationUnity={conservationUnity} />
			) : (
				<SummaryDialog
					conservationUnity={conservationUnity}
					setConservationUnity={setConservationUnity}
				/>
			)}
		</div>
	)
}
