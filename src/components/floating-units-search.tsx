'use client'

import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { units } from '@/constants/units'
import Link from 'next/link'
import { useState } from 'react'

export function FloatingUnitsSearch() {
	const [search, setSearch] = useState('')

	return (
		<div className="absolute top-4 inset-x-4 md:hidden z-40 flex flex-col">
			<Input
				className="rounded-b-none focus-visible:ring-0 focus-visible:ring-offset-0"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Pesquise pelas UCs..."
			/>

			<ScrollArea className="flex-1">
				<ul className="space-y-2 rounded-b bg-background">
					{Object.values(units)
						.filter(
							(unit) =>
								search &&
								unit.name.toLowerCase().includes(search.toLowerCase()),
						)
						.slice(0, 5)
						.map((unit) => (
							<li key={unit.name}>
								<Link
									href={'/units/' + unit.slug}
									className="rounded-md flex w-full items-center gap-2 p-1.5 hover:bg-accent transition-colors"
								>
									<div className="size-16 shrink-0 rounded-md bg-muted" />
									<h2 className="font-semibold text-start">{unit.name}</h2>
								</Link>
							</li>
						))}
				</ul>
			</ScrollArea>
		</div>
	)
}
