import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h1: ({ children }) => {
			return (
				<h1 className="text-3xl font-bold my-4 text-justify">{children}</h1>
			)
		},
		h2: ({ children }) => {
			return (
				<h2 className="text-2xl font-bold my-4 text-justify">{children}</h2>
			)
		},
		p: ({ children }) => {
			return <p className="my-2 text-justify">{children}</p>
		},
	}
}
