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
					<ul>
						{results.map((unit) => (
							<li key={unit.slug}>
								<Link key={unit.slug} href={'/units/' + unit.slug}>
									{unit.name}
								</Link>
							</li>
						))}
					</ul>
				</ScrollArea>
			</PopoverContent>
		</Popover>
	)
}
