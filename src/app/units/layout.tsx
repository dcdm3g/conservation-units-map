import { UnitDrawer } from '@/app/units/_components/unit-drawer'
import { UnitInformation } from '@/app/units/_components/unit-information'
import { Fragment, type ReactNode } from 'react'

interface UnitsLayoutProps {
	children: ReactNode
}

export default function UnitsLayout({ children }: UnitsLayoutProps) {
	return (
		<Fragment>
			<UnitInformation>{children}</UnitInformation>
			<UnitDrawer>{children}</UnitDrawer>
		</Fragment>
	)
}
