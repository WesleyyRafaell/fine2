export function formatCurrency(data: string) {
	const value = data
		.replace(/[^\d]+/gi, '')
		.split('')
		.reverse()
		.join('')
	let result = ''
	const mask = '##.###.###,##'.split('').reverse().join('')
	for (let x = 0, y = 0; x < mask.length && y < value.length; ) {
		if (mask.charAt(x) != '#') {
			result += mask.charAt(x)
			x++
		} else {
			result += value.charAt(y)
			y++
			x++
		}
	}

	return result.split('').reverse().join('')
}
