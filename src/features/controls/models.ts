import { Transaction } from '@/types/transaction'

export interface IControl {
	id: string
	name: string
	values: {
		total: number
		income: number
		expense: number
	}
	transactions: Transaction[]
}

export interface IControlRepository {
	getAllControls: () => IControl[]
	createControl: () => IControl
	selectControl: (id: string) => void
	updateNameControl: (id: string, name: string) => IControl[]
	deleteControl: (id: string) => void
}
