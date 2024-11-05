import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export function Dock({ className, ...rest }: ComponentProps<'ul'>) {
	return (
		<ul
			className={cn(
				'bg-background rounded-2xl left-1/2 -translate-x-1/2 bottom-4 flex mx-4 fixed md:right-4 overflow-hidden md:top-4 md:bottom-auto md:left-auto md:translate-x-0 z-50',
				className,
			)}
			{...rest}
		/>
	)
}

export function DockItem({ className, ...rest }: ComponentProps<'button'>) {
	return (
		<li>
			<button
				className={cn(
					'h-8 flex px-4 hover:bg-accent transition-colors justify-center items-center',
					className,
				)}
				{...rest}
			/>
		</li>
	)
}
