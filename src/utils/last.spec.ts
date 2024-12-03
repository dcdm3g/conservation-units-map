import { describe, expect, it } from 'bun:test'
import { last } from '@/utils/last'

describe('(utils) last', () => {
	it('should return the last element of an array', () => {
		const array = ['first', 'second', 'third']
		expect(last(array)).toBe('third')
	})
})
