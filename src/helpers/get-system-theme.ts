export function getSystemTheme() {
	const isDarkTheme = window.matchMedia?.(
		'(prefers-color-scheme: dark)',
	).matches

	return isDarkTheme ? 'dark' : 'outdoors'
}
