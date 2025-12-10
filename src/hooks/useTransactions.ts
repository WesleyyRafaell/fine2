import { Transaction } from '@/types/transaction'
import { useControl } from './useControl'

const useTransactions = () => {
	const { controls, updateControl, updateResults } = useControl()

	const setNewTransaction = (idControl: string, transaction: Transaction) => {
		const newControls = controls.map((item) => {
			if (item.id === idControl) {
				item.transactions.push(transaction)
				updateResults(item)
				return item
			}
			return item
		})

		updateControl(newControls)
	}

	const setUpdateTransaction = (
		idControl: string,
		idTransaction: string,
		type: 'name' | 'value',
		value: string,
	) => {
		const newControls = controls.map((item) => {
			if (item.id === idControl) {
				item.transactions.map((itemTransaction) => {
					if (itemTransaction.id === idTransaction) {
						itemTransaction[type] = value
					}

					updateResults(item)
					return item
				})
			}
			return item
		})

		updateControl(newControls)
	}

	const setUpdateTypeTransaction = (
		idControl: string,
		idTransaction: string,
		type: 'red' | 'green',
	) => {
		const newControls = controls.map((item) => {
			if (item.id === idControl) {
				item.transactions.map((itemTransaction) => {
					if (itemTransaction.id === idTransaction) {
						itemTransaction.type = type
					}

					updateResults(item)
					return item
				})
			}
			return item
		})

		updateControl(newControls)
	}

	const setUpdateVisibilityTransaction = (
		idControl: string,
		idTransaction: string,
		visible: boolean,
	) => {
		const newControls = controls.map((item) => {
			if (item.id === idControl) {
				item.transactions.map((itemTransaction) => {
					if (itemTransaction.id === idTransaction) {
						itemTransaction.visible = visible
					}

					updateResults(item)
					return item
				})
			}
			return item
		})

		updateControl(newControls)
	}

	const setDeleteTransaction = (idControl: string, idTransaction: string) => {
		const newControls = controls.filter((item) => {
			if (item.id === idControl) {
				item.transactions = item.transactions.filter(
					(itemTransaction) => itemTransaction.id !== idTransaction,
				)
				updateResults(item)
				return item
			}
			return item
		})

		updateControl(newControls)
	}

	return {
		setNewTransaction,
		setUpdateTransaction,
		setUpdateTypeTransaction,
		setUpdateVisibilityTransaction,
		setDeleteTransaction,
	}
}

export default useTransactions
