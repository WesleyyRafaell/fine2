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
	updateControl: (control: IControl) => Promise<IControl>
	deleteControl: (id: string) => Promise<void>
}
