import { useMemo, useState, useCallback } from 'react'

import Input from '@/components/elements/Input'
import SmallButton from '@/components/elements/SmallButton'

import { TypeCardProps } from '../CardTransaction'

import { NewTransaction } from '@/features/transactions/models'
import { createTransactionAction } from '@/features/transactions/action'
import { IControl } from '@/features/controls/models'
import { formatCurrency } from '@/utils/formatCurrency'

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
		<div className="bg-orange w-[47rem] rounded-[2.7rem] h-[16.3rem] flex justify-between p-[2.4rem_3.1rem]">
			<div className="h-full flex flex-col items-center justify-between">
				<Input
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					labelName="Nome transação"
					placeholder="Luz"
					inputSize="small"
					error={errors?.name}
				/>
				<SmallButton
					type="button"
					onClick={() => createNewTransaction('revenue')}
					className="bg-green"
				>
					Receita
				</SmallButton>
			</div>
			<div className="h-full flex flex-col items-center justify-between">
				<Input
					name="value"
					value={value}
					onChange={(e) => setValue(formatCurrency(e.target.value))}
					labelName="Valor"
					placeholder="255"
					inputSize="small"
					error={errors?.value}
					money
				/>
				<SmallButton
					type="button"
					color="red"
					onClick={() => createNewTransaction('expense')}
				>
					Despesa
				</SmallButton>
			</div>
		</div>
	)
}

export default FormNewTransaction
