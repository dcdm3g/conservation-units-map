'use client'

import mapboxgl, { type Map as MapType } from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

export function UnitsMap() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null)
	const mapRef = useRef<MapType>()

	useEffect(() => {
		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current!,
		})
	}, [])

	return <div className="flex-1 bg-zinc-700" ref={mapContainerRef} />
}
