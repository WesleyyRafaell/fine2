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
