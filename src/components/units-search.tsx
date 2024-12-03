'use client'

import { Input } from '@/components/ui/input'
import { Popover, PopoverAnchor, PopoverContent } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { units } from '@/constants/units'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export function BarSearch() {
	const [search, setSearch] = useState('')
	const [isPopoverOpen, setIsPopoverOpen] = useState(false)

	const results = useMemo(
		() =>
			units.filter((unit) =>
				unit.name.toLowerCase().includes(search.toLowerCase()),
			),
		[search],
	)

	return (
		<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
			<PopoverAnchor>
				<Input
					className="focus-visible:ring-0 peer focus-visible:ring-offset-0 focus:rounded-b-none"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value)
						setIsPopoverOpen(true)
					}}
					placeholder="Pesquise pelas UCs..."
				/>
			</PopoverAnchor>

			<PopoverContent
				className="w-[var(--radix-popover-trigger-width)] p-0"
				onOpenAutoFocus={(e) => e.preventDefault()}
			>
				<ScrollArea className="h-40">
					<ul className="space-y-2 rounded-b bg-background">
						{Object.values(units)
							.filter(
								(unit) =>
									search &&
									unit.name.toLowerCase().includes(search.toLowerCase()),
							)
							.map((unit) => (
								<li key={unit.name}>
									<Link
										href={'/units/' + unit.slug}
										className="rounded-md flex w-full items-center gap-2 p-1.5 hover:bg-accent transition-colors"
									>
										<h2 className="font-semibold text-start text-ellipsis whitespace-nowrap overflow-hidden">
											{unit.name}
										</h2>
									</Link>
								</li>
							))}
					</ul>
				</ScrollArea>
			</PopoverContent>
		</Popover>
	)
}
