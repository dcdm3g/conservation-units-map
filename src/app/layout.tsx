import { MainSidebar } from '@/components/main-sidebar'
import { UnitsMap } from '@/components/units-map'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
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
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={cn(inter.className, 'min-h-screen flex')}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
				>
					<MainSidebar />

					<div className="flex-1 relative flex">
						<UnitsMap />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
