import { ContentBar } from '@/components/content-bar'
import { FloatingUnitsSearch } from '@/components/floating-units-search'
import { StylesDock } from '@/components/themes-dock'
import { UnitsMap } from '@/components/units-map'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: 'Unidades de Conservação do RS',
	description:
		'Explore as unidades de conservação do Rio Grande do Sul e aprenda mais sobre seus grandes ecossistemas e biodiversidade.',
}

const inter = Inter({
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className="dark" lang="pt-BR">
			<body className={cn(inter.className, 'min-h-screen flex')}>
				<StylesDock />

				<div className="flex-1 relative flex">
					<FloatingUnitsSearch />

					<Suspense>
						<UnitsMap />
					</Suspense>

					<ContentBar>{children}</ContentBar>
				</div>
			</body>
		</html>
	)
}
