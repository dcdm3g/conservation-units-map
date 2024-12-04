import fs from 'node:fs'

const scope = 'public'

fs.readdir(scope, (_, data) => {
	for (const file of data) {
		const filename = file
			.replace('left', '1')
			.replace('middle', '2')
			.replace('right', '3')

		fs.renameSync(scope + '/' + file, scope + '/' + filename)
	}
})
