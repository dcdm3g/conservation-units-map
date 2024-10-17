'use client'

import mapboxgl, { type Map as MapType } from 'mapbox-gl'
import { type Dispatch, type SetStateAction, useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { CONSERVATION_UNITS } from '@/constants/conservation-units'

interface ConservationUnitsMapProps {
	setConservationUnit: Dispatch<
		SetStateAction<(typeof CONSERVATION_UNITS)[number]['name']>
	>
}

export function ConservationUnitsMap({
	setConservationUnit,
}: ConservationUnitsMapProps) {
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

		CONSERVATION_UNITS.forEach((unit) => {
			const el = new mapboxgl.Marker({ className: 'marker-' })
				.setLngLat(unit.lngLat)
				.addTo(mapRef.current!)
				.getElement()

			el.addEventListener('click', () => {
				setConservationUnit(unit.name)
			})
		})

		return () => mapRef.current!.remove()
	}, [setConservationUnit])

	return <div className="flex-1 bg-muted" ref={mapContainerRef} />
}
