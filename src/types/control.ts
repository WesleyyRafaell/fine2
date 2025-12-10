import { Transaction } from './transaction'

export type Control = {
	id: string
	name: string
	values: {
		total: number
		income: number
		expense: number
	}
	transactions: Transaction[]
}
