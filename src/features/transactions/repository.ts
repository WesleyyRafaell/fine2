import { ControlsStore } from '@/store/control-store'
import { ITransaction, ITransactionRepository, NewTransaction } from './models'
import { updateValueControlAction } from '../controls/actions'

export const TransactionRepository: ITransactionRepository = {
	getAllTransactions: function (idControl: string): ITransaction[] {
		throw new Error('Function not implemented.')
	},
	createTransaction: function (transaction: NewTransaction): void {
		const { controls } = ControlsStore.getState()

		const newTransaction = {
			id: crypto.randomUUID(),
			...transaction,
		}

		controls.map((control) => {
			if (control.id === transaction?.idControl) {
				control.transactions.push(newTransaction)
				updateValueControlAction(control)
			}
		})
	},
	updateNameTransaction: function (
		idControl: string,
		idTransaction: string,
		name: string,
	): ITransaction[] {
		throw new Error('Function not implemented.')
	},
	updateValueTransaction: function (
		idControl: string,
		idTransaction: string,
		value: string,
	): ITransaction[] {
		throw new Error('Function not implemented.')
	},
	updateTypeTransaction: function (
		idControl: string,
		idTransaction: string,
		type: 'revenue' | 'expense',
	): ITransaction[] {
		throw new Error('Function not implemented.')
	},
	updateVisibilityTransaction: function (
		idControl: string,
		idTransaction: string,
		visible: boolean,
	): ITransaction[] {
		throw new Error('Function not implemented.')
	},
	deleteTransaction: function (
		idControl: string,
		idTransaction: string,
	): ITransaction[] {
		throw new Error('Function not implemented.')
	},
}
