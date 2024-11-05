import { UnitsMap } from '@/components/units-map'
import type { Unit } from '@/interfaces/unit'
import dynamic from 'next/dynamic'
import { Fragment, useState } from 'react'

const Information = dynamic(
	() =>
		import('@/app/_components/information').then(
			(module) => module.Information,
		),
	{ ssr: false },
)

export default function Home() {
	return <Information />
}
