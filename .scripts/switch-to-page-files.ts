import fs from 'node:fs'

const scope = './src/app/units/[slug]'

fs.readdir(scope, (error, files) => {
	const mdx = files.filter((f) => f.endsWith('.mdx'))

	for (const page of mdx) {
		const [slug] = page.split('.')
		const folder = scope + '/' + slug

		fs.mkdirSync(folder)
		fs.renameSync(scope + '/' + page, folder + '/' + 'page.mdx')
	}
})
