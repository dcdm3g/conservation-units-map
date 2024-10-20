'use client'

import mapboxgl, { type Map as MapType } from 'mapbox-gl'
import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { GEOJSON } from '@/constants/geojson'
import type { Unit } from '@/interfaces/unit'

interface UnitsMapProps {
	setUnit: Dispatch<SetStateAction<Unit | null>>
}

export function UnitsMap({ setUnit }: UnitsMapProps) {
	const mapContainerRef = useRef<HTMLDivElement | null>(null)
	const mapRef = useRef<MapType>()

	useEffect(() => {
		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current!,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [-51.9253, -30.0346],
			zoom: 6,
			maxBounds: [
				[-60.9685, -34],
				[-49.125, -27],
			],
		})

		mapRef.current.on('load', () => {
			mapRef.current!.addSource('maine', { type: 'geojson', data: GEOJSON })

			mapRef.current!.addLayer({
				id: 'background',
				type: 'fill',
				source: 'maine',
				paint: {
					'fill-color': 'hsl(142.1, 76.2%, 36.3%)',
					'fill-opacity': 0.5,
				},
			})

			mapRef.current!.addLayer({
				id: 'outline',
				type: 'line',
				source: 'maine',
				paint: {
					'line-color': 'hsl(142.1, 76.2%, 36.3%)',
					'line-width': 2,
				},
			})

			mapRef.current!.on('click', 'background', (el) => {
				const [feature] = el.features!
				const unit = feature.properties as Unit
				setUnit(unit)
			})

			mapRef.current!.on('mouseenter', 'background', () => {
				const canvas = mapRef.current!.getCanvas()
				canvas.style.cursor = 'pointer'
			})

			mapRef.current!.on('mouseleave', 'background', () => {
				const canvas = mapRef.current!.getCanvas()
				canvas.style.cursor = ''
			})
		})

		return () => mapRef.current!.remove()
	}, [setUnit])

	return <div className="bg-muted flex-1" ref={mapContainerRef} />
}
