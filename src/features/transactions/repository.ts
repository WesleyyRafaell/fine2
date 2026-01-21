import { ControlsStore } from '@/store/control-store'
import { ITransaction, ITransactionRepository, NewTransaction } from './models'
import { updateValueControlAction } from '../controls/actions'
import { IControl } from '../controls/models'

export const TransactionRepository: ITransactionRepository = {
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
	): void {
		const { controls, updateControl, setSelectedControl } =
			ControlsStore.getState()

		const newControls: IControl[] = controls.map((control) => {
			if (control.id === idControl) {
				control.transactions = control.transactions.map((transaction) => {
					if (transaction.id === idTransaction) {
						return {
							...transaction,
							name,
						}
					}
					return transaction
				})

				setSelectedControl(control.id)
			}

			return control
		})

		updateControl(newControls)
	},
	updateValueTransaction: function (
		idControl: string,
		idTransaction: string,
		value: number,
	): void {
		const { controls } = ControlsStore.getState()

		controls.map((control) => {
			if (control.id === idControl) {
				control.transactions = control.transactions.map((transaction) => {
					if (transaction.id === idTransaction) {
						return {
							...transaction,
							value: value,
						}
					}
					return transaction
				})

				updateValueControlAction(control)
			}

			return control
		})
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
