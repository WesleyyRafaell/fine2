import { ITransaction } from './models'
import { TransactionRepository } from './repository'

export function createTransactionAction(
	newTransaction: Omit<ITransaction, 'id'>,
) {
	TransactionRepository.createTransaction(newTransaction)

	return { success: true }
}
