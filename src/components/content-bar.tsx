'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Maximize2, Minimize2 } from 'lucide-react'
import { type ReactNode, useRef, useState } from 'react'

gsap.registerPlugin(useGSAP)

interface ContentBarProps {
	children: ReactNode
}

export function ContentBar({ children }: ContentBarProps) {
	const container = useRef<HTMLDivElement | null>(null)
	const [state, setState] = useState<'minimized' | 'maximized'>('maximized')

	const { contextSafe } = useGSAP({ scope: container })

	const toggleState = contextSafe(() => {
		if (state === 'maximized') {
			gsap.to('#bar', { height: 0, duration: 0.4 })
			gsap.to('#content', { opacity: 0, duration: 0.25 })
			setState('minimized')
		} else {
			gsap.to('#bar', { height: '100%', duration: 0.4 })
			gsap.to('#content', { opacity: 1, delay: 0.4 })
			setState('maximized')
		}
	})

	return (
		<div ref={container} className="absolute left-4 inset-y-4 z-40">
			<aside
				id="bar"
				className="bg-card w-96 p-6 relative h-full rounded-lg shadow-md hidden md:block"
			>
				<button
					className="size-7 flex justify-center items-center hover:bg-accent transition-colors rounded-full bg-card absolute -top-1.5 -right-1.5"
					type="button"
					onClick={toggleState}
				>
					{state === 'maximized' ? (
						<Maximize2 className="size-3.5" />
					) : (
						<Minimize2 className="size-3.5" />
					)}
				</button>

				<div id="content" className="size-full">
					{children}
				</div>
			</aside>
		</div>
	)
}
