'use client'

import { useUnitsStore } from "@/stores/units-store"
import type { Unit } from '@/interfaces/unit'
import { useRouter } from "next/navigation"

interface UnitCardProps {
	unit: Unit
}

export function UnitCard({ unit }: UnitCardProps) {
  const select = useUnitsStore((store) => store.select)
  const router = useRouter()

  function handleSelect() {
    select(unit)
    router.replace('/')
  }

	return (
		<button
			type="button"
			className="rounded-md flex items-center gap-2 p-1.5 hover:bg-accent transition-colors"
      onClick={handleSelect}
		>
			<div className="size-16 shrink-0 rounded-md bg-muted" />
			<h2 className="font-semibold text-start">{unit.name}</h2>
		</button>
	)
}
