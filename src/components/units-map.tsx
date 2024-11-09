'use client'

import mapboxgl, { type Map as MapType } from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { geojson } from '@/constants/geojson'
import { styles } from '@/constants/styles'
import { units } from '@/constants/units'
import { parseSearchParamAsFloat } from '@/utils/parse-search-param-as-float'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useReadLocalStorage } from 'usehooks-ts'

export function UnitsMap() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null)
	const mapRef = useRef<MapType>(undefined)

	const style = useReadLocalStorage<string>('style')

	const searchParams = useSearchParams()
	const params = useParams<{ slug?: string }>()
	const router = useRouter()

	useEffect(() => {
		mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

		const longitude = parseSearchParamAsFloat(searchParams.get('lng'), -51.9253)
		const latitude = parseSearchParamAsFloat(searchParams.get('lat'), -30.0346)
		const zoom = parseSearchParamAsFloat(searchParams.get('zoom'), 6)

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current!,
			style: style ?? styles.outdoors,
			center: [longitude, latitude],
			zoom,
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
				const { slug } = feature.properties as { slug: string }

				router.push('/units/' + slug + '?' + searchParams.toString())
			})

			mapRef.current!.on('mouseenter', 'background', () => {
				const canvas = mapRef.current!.getCanvas()
				canvas.style.cursor = 'pointer'
			})

			mapRef.current!.on('moveend', (event) => {
				const { lng, lat } = event.target.getCenter()
				const zoom = event.target.getZoom()

				const params = new URLSearchParams(searchParams.toString())

				params.set('lng', String(lng))
				params.set('lat', String(lat))
				params.set('zoom', String(zoom))

				window.history.replaceState(null, '', '?' + params.toString())
			})

			mapRef.current!.on('mouseleave', 'background', () => {
				const canvas = mapRef.current!.getCanvas()
				canvas.style.cursor = ''
			})
		})

		return () => mapRef.current!.remove()
	}, [style, searchParams.get, searchParams.toString, router.push])

	useEffect(() => {
		if (!params.slug) {
			return
		}

		const unit = units[params.slug]

		if (unit?.lng && unit?.lat) {
			mapRef.current!.flyTo({
				center: [unit.lng, unit.lat],
				zoom: 10,
				speed: 1.2,
				curve: 1,
				essential: true,
			})
		}
	}, [params.slug])

	return <div className="bg-muted flex-1" ref={mapContainerRef} />
}
