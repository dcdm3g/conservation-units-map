'use client'

import { UnitsMap } from '@/components/units-map'
import type { Unit } from '@/interfaces/unit'
import dynamic from 'next/dynamic'
import { Fragment, useState } from 'react'

const Information = dynamic(
	() => import('@/components/information').then((module) => module.Information),
	{ ssr: false },
)

export default function Home() {
	const [unit, setUnit] = useState<Unit | null>(null)

	return (
		<Fragment>
			<UnitsMap setUnit={setUnit} />
			<Information unit={unit} setUnit={setUnit} />
		</Fragment>
	)
}
