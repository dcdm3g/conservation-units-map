import type { Metadata } from 'next'
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
		<html lang="pt-BR">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
