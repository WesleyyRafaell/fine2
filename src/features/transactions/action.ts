import { ITransaction } from './models'
import { TransactionRepository } from './repository'

export function createTransactionAction(
	newTransaction: Omit<ITransaction, 'id'>,
) {
	TransactionRepository.createTransaction(newTransaction)

	return { success: true }
}

export function updateNameTransactionAction(
	idControl: string,
	idTransaction: string,
	name: string,
): void {
	TransactionRepository.updateNameTransaction(idControl, idTransaction, name)
}

export function updateValueTransactionAction(
	idControl: string,
	idTransaction: string,
	value: number,
): void {
	TransactionRepository.updateValueTransaction(idControl, idTransaction, value)
}

export function updateTypeTransactionAction(
	idControl: string,
	idTransaction: string,
	type: 'revenue' | 'expense',
): void {
	TransactionRepository.updateTypeTransaction(idControl, idTransaction, type)
}

export function updateVisibilityTransactionAction(
	idControl: string,
	idTransaction: string,
	visible: boolean,
): void {
	TransactionRepository.updateVisibilityTransaction(
		idControl,
		idTransaction,
		visible,
	)
}

export function deleteTransactionAction(
	idControl: string,
	idTransaction: string,
): void {
	TransactionRepository.deleteTransaction(idControl, idTransaction)
}
