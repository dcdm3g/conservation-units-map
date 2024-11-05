export interface Unit {
	name: string
	summary: string
	category: 'Unidade de Uso Sustentável' | 'Unidade de Proteção Integral'
	lngLat?: [number, number]
}
