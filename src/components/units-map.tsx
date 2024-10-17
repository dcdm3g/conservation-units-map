'use client'

import mapboxgl, { type Map as MapType } from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { conservationUnits } from '@/data/conservation-units'

export function UnitsMap() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null)
	const mapRef = useRef<MapType>()

	useEffect(() => {
		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current!,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-51.9253, -30.0346],
			zoom: 6,
			maxBounds: [
				[-57.6485, -33.7512],
				[-49.6976, -27.0767],
			],
		})

		conservationUnits.forEach((unit) => {
			const el = document.createElement('div')
			el.className = 'marker'

			new mapboxgl.Marker()
				.setLngLat(unit.lngLat)
				.setPopup(new mapboxgl.Popup({ offset: 25 }).setText(unit.name))
				.addTo(mapRef.current!)

			el.addEventListener('click', () => {
				alert(`You clicked on ${unit.name}`)
			})
		})

		return () => mapRef.current!.remove()
	}, [])

	return <div className="flex-1 bg-muted" ref={mapContainerRef} />
}
