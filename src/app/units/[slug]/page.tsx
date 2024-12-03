import { UnitDrawer } from '@/app/units/[slug]/_components/unit-drawer'
import { UnitInformation } from '@/app/units/[slug]/_components/unit-information'
import { units } from '@/constants/units'
import { Fragment } from 'react'

export const dynamicParams = false

export function generateStaticParams() {
	return units.map((unit) => ({ slug: unit.slug }))
}

interface UnitProps {
	params: Promise<{ slug: string }>
}

export default async function Unit({ params }: UnitProps) {
	const { slug } = await params
	const info = units.find((unit) => unit.slug === slug)

	return (
		<Fragment>
			<UnitInformation info={info!} />
			<UnitDrawer info={info!} />
		</Fragment>
	)
}
