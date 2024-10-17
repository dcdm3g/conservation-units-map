'use client'

import { ConservationUnitsMap } from '@/components/conservation-units-map'
import { Sidebar } from '@/components/sidebar'
import type { CONSERVATION_UNITS } from '@/constants/conservation-units'
import { useState } from 'react'

export default function Home() {
	const [conservationUnity, setConservationUnity] =
		useState<(typeof CONSERVATION_UNITS)[number]['name']>('')

	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-50 flex">
			<ConservationUnitsMap setConservationUnit={setConservationUnity} />
			<Sidebar conservationUnity={conservationUnity} />
		</div>
	)
}
