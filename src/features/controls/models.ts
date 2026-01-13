import { ITransaction } from '../transactions/models'

export interface IControl {
	id: string
	name: string
	values: {
		total: number
		income: number
		expense: number
	}
	transactions: ITransaction[]
}

export interface IControlRepository {
	getAllControls: () => IControl[]
	createControl: () => IControl
	selectControl: (id: string) => void
	updateNameControl: (id: string, name: string) => IControl[]
	updateValueControl: (control: IControl) => void
	deleteControl: (id: string) => void
}
