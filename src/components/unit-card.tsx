'use client'

import type { Unit } from '@/interfaces/unit'
import { useUnitsStore } from '@/stores/units-store'
import { useRouter } from 'next/navigation'

interface UnitCardProps {
	unit: Unit
	onClick?: () => void
}

export function UnitCard({ unit, onClick }: UnitCardProps) {
	const select = useUnitsStore((store) => store.select)
	const router = useRouter()

	function handleSelect() {
		select(unit)
		router.replace('/')
		onClick?.()
	}

	return (
		<button
			type="button"
			className="rounded-md flex w-full items-center gap-2 p-1.5 hover:bg-accent transition-colors"
			onClick={handleSelect}
		>
			<div className="size-16 shrink-0 rounded-md bg-muted" />
			<h2 className="font-semibold text-start">{unit.name}</h2>
		</button>
	)
}
