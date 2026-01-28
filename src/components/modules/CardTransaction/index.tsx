import { useState } from 'react'
import Input from '../../elements/Input'

import { ITransaction } from '@/features/transactions/models'
import {
	updateNameTransactionAction,
	updateTypeTransactionAction,
	updateValueTransactionAction,
	updateVisibilityTransactionAction,
} from '@/features/transactions/action'

import { RiDeleteBack2Fill } from 'react-icons/ri'
import { IoLockClosedSharp, IoLockOpen } from 'react-icons/io5'

import { formatNumberCurrency } from '@/utils/formatCurrency'

export type TypeCardProps = 'revenue' | 'expense'

type CardTransactionProps = ITransaction & {
	openDeleteModal?: () => void
}

const CardTransaction = ({
	idControl,
	id,
	name,
	value,
	type,
	visible,
	openDeleteModal,
}: CardTransactionProps) => {
	const [inputName, setInputName] = useState(name)
	const [inputValue, setInputValue] = useState<number>(value)

	const updateVisibilityTransaction = () => {
		updateVisibilityTransactionAction(idControl, id, !visible)
	}

	const handleChangeTypeCard = (type: TypeCardProps) => {
		updateTypeTransactionAction(idControl, id, type)
	}

	const handleNameEdit = (value: string) => {
		setInputName(value)
		updateNameTransactionAction(idControl, id, value)
	}

	const handleValueEdit = (newValue: string) => {
		const numericValue = Number(newValue.replace(/\D/g, '')) / 100

		if (Number.isNaN(numericValue)) return

		setInputValue(numericValue)
		updateValueTransactionAction(idControl, id, numericValue)
	}

	const bgColor = visible ? 'bg-slate-50/50' : 'bg-slate-200'

	const expenseColor = type === 'expense' ? 'bg-expense' : 'bg-slate-200'
	const revenueColor = type === 'revenue' ? 'bg-green' : 'bg-slate-200'

	return (
		<div className="mb-7">
			<div
				className={`flex items-center gap-4 p-5 rounded-3xl  border border-slate-100/50 dark:border-slate-700/50 ${bgColor}`}
			>
				<div className="flex gap-2 bg-white dark:bg-slate-700 p-1.5 rounded-full shadow-inner">
					<button
						className={`w-9 h-9 rounded-full ${revenueColor} dark:bg-slate-600 hover:bg-income transition-colors hover:bg-green/90`}
						onClick={() => handleChangeTypeCard('revenue')}
						title="Receita"
					></button>
					<button
						className={`w-9 h-9 rounded-full ${expenseColor} dot-shadow-red flex items-center justify-center text-white scale-110 hover:bg-expense/90`}
						onClick={() => handleChangeTypeCard('expense')}
						title="Despesa"
					></button>
				</div>
				<div className="flex-1 px-4">
					<Input
						name="nameEdit"
						value={inputName}
						onChange={(e) => handleNameEdit(e.target.value)}
						error={undefined}
						inputSize="regular"
					/>
				</div>
				<div className="text-right min-w-[120px]">
					<Input
						name="valueEdit"
						value={formatNumberCurrency(inputValue)}
						onChange={(e) => handleValueEdit(e.target.value)}
						error={undefined}
						inputSize="small"
						inputColor={type === 'expense' ? 'text-expense' : 'text-green'}
						money
					/>
				</div>
				<div className="flex items-center gap-2 ml-4">
					<button
						className="p-3 rounded-xl bg-slate-200/50 dark:bg-slate-700 text-slate-400 hover:text-primary transition-all flex items-center justify-center"
						title="Desabilitar/Habilitar"
						onClick={updateVisibilityTransaction}
					>
						{visible ? (
							<IoLockOpen className="text-4xl" />
						) : (
							<IoLockClosedSharp className="text-4xl" />
						)}
					</button>
					<button
						className="p-3 rounded-xl bg-slate-200/50 dark:bg-slate-700 text-slate-400 hover:text-expense transition-all flex items-center justify-center"
						title="Deletar"
						onClick={() => openDeleteModal?.()}
					>
						<RiDeleteBack2Fill className="text-4xl" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CardTransaction
