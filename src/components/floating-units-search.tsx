'use client'

import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UnitCard } from '@/components/unit-card'
import { UNITS } from '@/constants/units'
import { useState } from 'react'

export function FloatingUnitsSearch() {
	const [search, setSearch] = useState('')

	return (
		<div className="absolute inset-4 md:hidden z-50 flex flex-col">
			<Input
				className="rounded-b-none focus-visible:ring-0"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Pesquise pelas UCs..."
			/>

			<ScrollArea className="flex-1">
				<ul className="space-y-2 rounded-b bg-background">
					{Object.values(UNITS)
						.filter(
							(unit) =>
								search &&
								unit.name.toLowerCase().includes(search.toLowerCase()),
						)
						.map((unit) => (
							<li key={unit.name}>
								<UnitCard unit={unit} onClick={() => setSearch('')} />
							</li>
						))}
				</ul>
			</ScrollArea>
		</div>
	)
}
