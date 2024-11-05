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
				<ul className='flex flex-col gap-0.5'>
				{Object.values(UNITS)
					.filter((unit) => search && unit.name.includes(search))
					.slice(0, 10)
					.map((unit) => (
						<li key={unit.name}><UnitCard unit={unit} /></li>
					))}
				</ul>
			</ScrollArea>
		</div>
	)
}
