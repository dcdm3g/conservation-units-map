'use client'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

export function Sidebar({
	className,
	children,
	...rest
}: ComponentProps<'aside'>) {
	return (
		<aside
			className={cn('flex flex-col border-r bg-background p-2', className)}
			{...rest}
		>
			{children}
		</aside>
	)
}

export function SidebarGroup({ className, ...rest }: ComponentProps<'ul'>) {
	return <ul className={cn('flex flex-col gap-1', className)} {...rest} />
}

export function SidebarItem({
	className,
	href,
	label,
	...rest
}: ComponentProps<typeof Link> & { label: string }) {
	const pathname = usePathname()
	const state = pathname === href ? 'active' : 'inactive'

	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<li>
						<Link
							data-state={state}
							href={href}
							className={cn(
								'flex size-10 items-center justify-center rounded text-foreground transition-colors hover:bg-accent data-[state=active]:bg-accent data-[state=active]:text-primary [&>svg]:size-5',
								className,
							)}
							{...rest}
						/>
					</li>
				</TooltipTrigger>

				<TooltipContent side="right" sideOffset={16}>
					<p>{label}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
