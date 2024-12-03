'use client'

import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { ComponentProps } from 'react'

export function Link({ href, ...rest }: ComponentProps<typeof NextLink>) {
	const searchParams = useSearchParams()

	return <NextLink href={href + '?' + searchParams.toString()} {...rest} />
}
