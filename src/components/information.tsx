'use client'

import { Sidebar } from '@/components/sidebar'
import { SummaryDialog } from '@/components/summary-dialog'
import type { Unit } from '@/interfaces/unit'
import type { Dispatch, SetStateAction } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface InformationProps {
	unit: Unit | null
	setUnit: Dispatch<SetStateAction<Unit | null>>
}

export function Information({ unit, setUnit }: InformationProps) {
	const isTablet = useMediaQuery('(min-width: 768px)')

	return isTablet ? (
		<Sidebar unit={unit} />
	) : (
		<SummaryDialog unit={unit} setUnit={setUnit} />
	)
}
