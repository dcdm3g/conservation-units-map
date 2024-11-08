'use client'

import mapboxgl, { type Map as MapType, LngLat } from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { geojson } from '@/constants/geojson'
import { styles } from '@/constants/styles'
import type { Unit } from '@/interfaces/unit'
import { useUnitsStore } from '@/stores/units-store'
import { useRouter } from 'next/navigation'
import { useReadLocalStorage } from 'usehooks-ts'

export function UnitsMap() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null)
	const mapRef = useRef<MapType>(undefined)

	const select = useUnitsStore((store) => store.select)
	const selected = useUnitsStore((store) => store.selected)

	const style = useReadLocalStorage<string>('style')
	const router = useRouter()

	useEffect(() => {
		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current!,
			style: style ?? styles.outdoors,
			center: [-51.9253, -30.0346],
			zoom: 6,
			maxBounds: [
				[-60.9685, -34],
				[-49.125, -27],
			],
		})

		mapRef.current.on('load', () => {
			mapRef.current!.addSource('maine', { type: 'geojson', data: geojson })

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

				select(unit)
				router.replace('/')
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
	}, [select, style, router])

	useEffect(() => {
		if (selected?.lng && selected?.lat) {
			mapRef.current!.flyTo({
				center: [selected.lng, selected.lat],
				zoom: 10,
				speed: 1.2,
				curve: 1,
				essential: true,
			})
		}
	})

	return <div className="bg-muted flex-1" ref={mapContainerRef} />
}
