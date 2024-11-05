'use client'

import { InformationBar } from '@/app/_components/information-bar'
import { InformationDialog } from '@/app/_components/information-dialog'
import { useMediaQuery } from 'usehooks-ts'

export function Information() {
	const isTablet = useMediaQuery('(min-width: 768px)')
	return isTablet ? <InformationBar /> : <InformationDialog />
}
