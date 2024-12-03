import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const config: NextConfig = {
	pageExtensions: ['tsx', 'mdx'],
}

const withMDX = createMDX()

export default withMDX(config)
