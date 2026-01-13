export type ITransaction = {
	id: string
	idControl: string
	name: string
	value: number
	visible: boolean
	type: 'revenue' | 'expense'
}

export type NewTransaction = Omit<ITransaction, 'id'>

export interface ITransactionRepository {
	getAllTransactions: (idControl: string) => ITransaction[]
	createTransaction: (newTransaction: NewTransaction) => void
	updateNameTransaction: (
		idControl: string,
		idTransaction: string,
		name: string,
	) => ITransaction[]
	updateValueTransaction: (
		idControl: string,
		idTransaction: string,
		value: string,
	) => ITransaction[]
	updateTypeTransaction: (
		idControl: string,
		idTransaction: string,
		type: 'revenue' | 'expense',
	) => ITransaction[]
	updateVisibilityTransaction: (
		idControl: string,
		idTransaction: string,
		visible: boolean,
	) => ITransaction[]
	deleteTransaction: (
		idControl: string,
		idTransaction: string,
	) => ITransaction[]
}
