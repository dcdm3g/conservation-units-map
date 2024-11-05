'use client'

import { UnitCard } from '@/app/search/_components/unit-card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UNITS } from '@/constants/units'
import { useState } from 'react'

export function UnitsSearch() {
	const [search, setSearch] = useState('')

	return (
		<div className="flex flex-col gap-6 h-full">
			<Input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Pesquise pelas UCs..."
			/>

			<ScrollArea className="flex-1">
				{Object.values(UNITS)
					.filter((unit) => search && unit.name.includes(search))
					.slice(0, 10)
					.map((unit) => (
						<UnitCard key={unit.name} unit={unit} />
					))}
			</ScrollArea>
		</div>
	)
}
