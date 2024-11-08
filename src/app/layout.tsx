import { FloatingUnitsSearch } from '@/components/floating-units-search'
import { MainSidebar } from '@/components/main-sidebar'
import { StylesDock } from '@/components/themes-dock'
import { UnitsMap } from '@/components/units-map'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import './globals.css'
import { ContentBar } from '@/components/content-bar'

export const metadata: Metadata = {
	title: 'Unidades de Conservação do RS',
	description:
		'Explore as unidades de conservação do Rio Grande do Sul e aprenda mais sobre seus grandes ecossistemas e biodiversidade.',
}

const inter = Inter({
	subsets: ['latin'],
})

const InformationDialog = dynamic(
	() =>
		import('@/components/information-dialog').then(
			(module) => module.InformationDialog,
		),
	{ ssr: false },
)

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className="dark" lang="pt-BR">
			<body className={cn(inter.className, 'min-h-screen flex')}>
				<MainSidebar />
				<StylesDock />

				<div className="flex-1 relative flex">
					<FloatingUnitsSearch />
					<InformationDialog />
					<UnitsMap />
					<ContentBar>{children}</ContentBar>
				</div>
			</body>
		</html>
	)
}
