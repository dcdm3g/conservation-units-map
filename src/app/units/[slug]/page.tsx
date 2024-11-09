import { UnitDialog } from '@/app/units/[slug]/_components/unit-dialog'
import { UnitInformation } from '@/app/units/[slug]/_components/unit-information'
import { units } from '@/constants/units'
import { Fragment } from 'react'

export const dynamicParams = false

export function generateStaticParams() {
	const slugs = Object.keys(units)
	return slugs.map((slug) => ({ slug }))
}

interface UnitProps {
	params: Promise<{ slug: string }>
}

export default async function Unit({ params }: UnitProps) {
	const { slug } = await params
	const info = units[slug]

	return (
		<Fragment>
			<UnitInformation info={info} />
			<UnitDialog info={info} />
		</Fragment>
	)
}
