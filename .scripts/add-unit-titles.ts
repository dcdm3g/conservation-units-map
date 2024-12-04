import fs from 'node:fs'
const scope = './src/app/units/(mdx)'

fs.readdir(scope, async (error, mdx) => {
	for (const folder of mdx) {
		const file = scope + '/' + folder + '/page.mdx'

		const title = folder
			.split('-')
			.map((w) => w.replace(/^([a-z])/, (l) => l.toUpperCase()))
			.join(' ')

		fs.readFile(file, 'utf8', (error, data) => {
			const content = '# ' + title + '\n\n' + data
			fs.writeFileSync(file, content)
		})
	}
})
