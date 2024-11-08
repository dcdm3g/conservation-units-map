'use client'

import dynamic from 'next/dynamic'

const InformationDialog = dynamic(
	() =>
		import('@/components/information-dialog').then(
			(module) => module.InformationDialog,
		),
	{ ssr: false },
)

export { InformationDialog }
