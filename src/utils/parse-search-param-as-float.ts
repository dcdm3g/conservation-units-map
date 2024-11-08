export function parseSearchParamAsFloat(text: string | null, initial: number) {
	if (!text) {
		return initial
	}

	const float = Number.parseFloat(text)
	return Number.isNaN(float) ? initial : float
}
