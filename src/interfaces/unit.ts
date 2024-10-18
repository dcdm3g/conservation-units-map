import type { GEOJSON } from '@/constants/geojson'

export type Unit = (typeof GEOJSON)['features'][number]['properties']
