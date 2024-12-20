'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { last } from '@/utils/last'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function ImageCarousel() {
	const pathname = usePathname()
	const unit = last(pathname.split('/'))

	return (
		<Carousel className="w-full">
			<CarouselContent>
				<CarouselItem className="relative h-40">
					<Image src={'/' + unit + '-1.jpg'} alt={unit} fill />
				</CarouselItem>

				<CarouselItem className="relative h-40">
					<Image src={'/' + unit + '-2.jpg'} alt={unit} fill />
				</CarouselItem>

				<CarouselItem className="relative h-40">
					<Image src={'/' + unit + '-3.jpg'} alt={unit} fill />
				</CarouselItem>

				<CarouselItem className="relative h-40">
					<Image src={'/' + unit + '-4.jpg'} alt={unit} fill />
				</CarouselItem>

				<CarouselItem className="relative h-40">
					<Image src={'/' + unit + '-5.jpg'} alt={unit} fill />
				</CarouselItem>
			</CarouselContent>

			<CarouselNext />
			<CarouselPrevious />
		</Carousel>
	)
}
