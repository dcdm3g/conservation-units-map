import fs from 'node:fs'
const scope = './src/app/units'

fs.readdir(scope, (error, data) => {
	const mdx = data.filter(
		(d) => !['_components', 'layout.tsx', '(mdx)'].includes(d),
	)

	for (const folder of mdx) {
		fs.renameSync(scope + '/' + folder, scope + '/(mdx)/' + folder)
	}
})
