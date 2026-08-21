import { ControlsStore } from '@/store/control-store'
import { ITransactionRepository, NewTransaction } from './models'
import { updateValueControlAction } from '../controls/actions'
import { IControl } from '../controls/models'
import { arrayMove } from '@dnd-kit/sortable'

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
	): void {
		const { controls } = ControlsStore.getState()

		controls.map((control) => {
			if (control.id === idControl) {
				control.transactions = control.transactions.map((transaction) => {
					if (transaction.id === idTransaction) {
						return {
							...transaction,
							type,
						}
					}
					return transaction
				})

				updateValueControlAction(control)
			}

			return control
		})
	},
	updateVisibilityTransaction: function (
		idControl: string,
		idTransaction: string,
		visible: boolean,
	): void {
		const { controls } = ControlsStore.getState()

		controls.map((control) => {
			if (control.id === idControl) {
				control.transactions = control.transactions.map((transaction) => {
					if (transaction.id === idTransaction) {
						return {
							...transaction,
							visible,
						}
					}
					return transaction
				})

				updateValueControlAction(control)
			}

			return control
		})
	},
	deleteTransaction: function (idControl: string, idTransaction: string): void {
		const { controls } = ControlsStore.getState()

		controls.filter((item) => {
			if (item.id === idControl) {
				item.transactions = item.transactions.filter(
					(itemTransaction) => itemTransaction.id !== idTransaction,
				)

				updateValueControlAction(item)
			}
		})
	},
	reorderTransactions: function (
		idControl: string,
		oldIndex: number,
		newIndex: number,
	): void {
		const { controls, setSelectedControl } = ControlsStore.getState()

		const newControls: IControl[] = controls.map((control) => {
			if (control.id === idControl) {
				control.transactions = arrayMove(
					control.transactions,
					oldIndex,
					newIndex,
				)
				setSelectedControl(control.id)
			}
			return control
		})

		ControlsStore.getState().updateControl(newControls)
	},
}
