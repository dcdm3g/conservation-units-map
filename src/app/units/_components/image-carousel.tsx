import Image from 'next/image'

interface ImageCarouselProps {
	unit: string
}

export function ImageCarousel({ unit }: ImageCarouselProps) {
	return (
		<div className="mt-2 flex h-40 w-full">
			<div className="h-40 w-64 relative">
				<Image src={'/' + unit + '-left.jpg'} alt={unit} fill />
			</div>

			<div className="h-40 w-64 relative">
				<Image src={'/' + unit + '-middle.jpg'} alt={unit} fill />
			</div>

			<div className="h-40 w-64 relative">
				<Image src={'/' + unit + '-right.jpg'} alt={unit} fill />
			</div>
		</div>
	)
}
