export type Transaction = {
	id: string
	name: string
	value: string
	visible: boolean
	type: 'revenue' | 'expense'
}
