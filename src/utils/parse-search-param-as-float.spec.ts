import { describe, expect, it } from 'bun:test'
import { parseSearchParamAsFloat } from '@/utils/parse-search-param-as-float'

describe('(utils) parseSearchParamAsFloat', () => {
	it('should be able to parse floats', () => {
		const param = '53.352'
		const parsed = parseSearchParamAsFloat(param, 12)

		expect(parsed).toBe(Number(param))
	})

	it('should be able to parse integers', () => {
		const param = '56'
		const parsed = parseSearchParamAsFloat(param, 12)

		expect(parsed).toBe(Number(param))
	})

	it('should return initial if param is null', () => {
		const initial = 36
		const parsed = parseSearchParamAsFloat(null, initial)

		expect(parsed).toBe(initial)
	})

	it('should return initial if param is not a number', () => {
		const param = 'xyz'
		const initial = 24
		const parsed = parseSearchParamAsFloat(param, initial)

		expect(parsed).toBe(initial)
	})
})
