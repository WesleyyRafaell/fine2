import { useMemo, useState, useCallback } from 'react'

import { TypeCardProps } from '../CardTransaction'

import { NewTransaction } from '@/features/transactions/models'
import { createTransactionAction } from '@/features/transactions/action'
import { IControl } from '@/features/controls/models'
import { formatStringCurrency } from '@/utils/formatCurrency'
import { IoMdTrendingUp, IoMdTrendingDown } from 'react-icons/io'

import { IoAddCircle } from 'react-icons/io5'

type IFormNewTransactionProps = {
	selectedControl: IControl | null
}

type IErrors = {
	name?: string
	value?: string
}

const FormNewTransaction = ({ selectedControl }: IFormNewTransactionProps) => {
	const [name, setName] = useState('')
	const [value, setValue] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const catchingErrors = useCallback((): IErrors | null => {
		const errors: IErrors = {}

		if (!name) {
			errors.name = 'Nome é obrigatório'
		}

		if (!value) {
			errors.value = 'Valor é obrigatório'
		}

		return Object.keys(errors).length ? errors : null
	}, [name, value])

	const createNewTransaction = (type: TypeCardProps) => {
		if (!selectedControl) return

		setSubmitted(true)

		if (catchingErrors()) return

		const newTransaction: NewTransaction = {
			type,
			visible: true,
			idControl: selectedControl.id,
			name,
			value: formatValueField(value) || 0,
		}

		createTransactionAction(newTransaction)

		setName('')
		setValue('')
		setSubmitted(false)
	}

	const formatValueField = (val: string) => {
		const digitsOnly = val.replace(/\D/g, '')

		if (digitsOnly === '') {
			setValue('')
			return
		}

		const numberValue = Number(digitsOnly) / 100

		if (!Number.isNaN(numberValue)) {
			return numberValue
		}
	}

	const errors = useMemo(() => {
		if (!submitted) return null
		return catchingErrors()
	}, [submitted, catchingErrors])

	return (
		<div className="w-full lg:w-4/12">
			<div className="bg-white top-8 glass-card p-6 rounded-[3rem]">
				<div className="flex items-center gap-4 mb-6">
					<IoAddCircle className="text-primary text-6xl" />
					<h3 className="text-3xl font-bold flex items-center gap-2 text-neutral">
						Nova Transação
					</h3>
				</div>
				<div className="space-y-4">
					<div className="mb-6">
						<label className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-2 block">
							Nome
						</label>
						<input
							className="w-full text-2xl text-slate-500 font-bold bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary py-3 px-4 "
							placeholder="Ex: Aluguel"
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{errors?.name && <p className="error-label">{errors?.name}</p>}
					</div>
					<div>
						<label className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-2 block">
							Valor
						</label>
						<div className="flex items-center gap-3 justify-start w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-3 pl-4">
							<span className="text-2xl font-bold text-slate-500 ">R$</span>
							<input
								className="text-2xl text-slate-500 font-bold bg-slate-100 dark:bg-slate-800 border-none outline-none"
								placeholder="0,00"
								name="value"
								value={value}
								onChange={(e) => setValue(formatStringCurrency(e.target.value))}
							/>
						</div>
						{errors?.value && <p className="error-label">{errors?.value}</p>}
					</div>
					<div className="grid grid-cols-2 gap-4 pt-4">
						<button
							className="bg-green text-white font-bold py-4 rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-income/20"
							onClick={() => createNewTransaction('revenue')}
						>
							<IoMdTrendingUp className="text-white text-3xl" />
							Receita
						</button>
						<button
							className="bg-expense text-white font-bold py-4 rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-expense/20"
							onClick={() => createNewTransaction('expense')}
						>
							<IoMdTrendingDown className="text-white text-3xl" />
							Despesa
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormNewTransaction
