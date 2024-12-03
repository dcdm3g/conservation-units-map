'use client'

import { BarSearch } from '@/components/bar-search'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ChevronUp } from 'lucide-react'
import { type ReactNode, useRef, useState } from 'react'

gsap.registerPlugin(useGSAP)

interface ContentBarProps {
	children: ReactNode
}

export function ContentBar({ children }: ContentBarProps) {
	const container = useRef<HTMLDivElement | null>(null)
	const [isMinimized, setIsMinimized] = useState(false)

	useGSAP(
		(context) => {
			if (isMinimized) {
				gsap.to('#bar', { height: 0, duration: 0.4 })
				gsap.to('#content', { opacity: 0, duration: 0.2 })
			} else {
				gsap.to('#bar', { height: '100%', duration: 0.4 })
				gsap.to('#content', { opacity: 1, duration: 0.2 })
			}
		},
		{
			scope: container,
			dependencies: [isMinimized],
		},
	)

	return (
		<div ref={container} className="absolute left-4 inset-y-4 z-40">
			<aside
				id="bar"
				className="bg-card w-96 p-6 relative h-full rounded-lg shadow-md hidden md:block"
			>
				<button
					className="size-7 flex justify-center items-center hover:bg-accent transition-colors rounded-full bg-card absolute -top-1.5 -right-1.5"
					type="button"
					onClick={() => setIsMinimized((im) => !im)}
				>
					<ChevronUp
						className={cn(
							'size-4 transition-transform',
							isMinimized && 'rotate-180',
						)}
					/>
				</button>

				<div id="content" className="size-full relative pt-14">
					<BarSearch />

					{children}
				</div>
			</aside>
		</div>
	)
}
