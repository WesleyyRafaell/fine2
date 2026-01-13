import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import Input from '@/components/elements/Input'
import SmallButton from '@/components/elements/SmallButton'
import { formatCurrency } from '@/utils/formatCurrency'

import { TypeCardProps } from '../CardTransaction'

import * as S from './style'

import { NewTransaction } from '@/features/transactions/models'
import { createTransactionAction } from '@/features/transactions/action'
import { IControl } from '@/features/controls/models'

const formNewTransactionSchema = z.object({
	name: z.string().nonempty('Campo obrigatório'),
	value: z.number().min(0.01, 'Campo obrigatório'),
})

type FormNewTransactionData = z.infer<typeof formNewTransactionSchema>

type IFormNewTransactionProps = {
	selectedControl: IControl | null
}

const FormNewTransaction = ({ selectedControl }: IFormNewTransactionProps) => {
	const form = useRef<HTMLFormElement>(null)
	const inputType = useRef<HTMLInputElement>(null)

	const methods = useForm<FormNewTransactionData>({
		defaultValues: {
			name: '',
			value: 0,
		},
		resolver: zodResolver(formNewTransactionSchema),
	})

	const {
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = methods

	const handleFormSubmit = (data: FormNewTransactionData) => {
		//find a better way - typescript
		if (
			inputType.current!.value !== 'revenue' &&
			inputType.current!.value !== 'expense'
		)
			return

		const type: TypeCardProps = inputType.current!.value

		const newTransaction: NewTransaction = {
			type,
			visible: true,
			idControl: selectedControl!.id,
			...data,
		}

		createTransactionAction(newTransaction)

		reset({
			name: '',
			value: 0,
		})
	}

	const handleSubmitFormAction = (type: TypeCardProps) => {
		inputType.current!.value = type
		form.current!.requestSubmit()
	}

	return (
		<S.Container ref={form} onSubmit={handleSubmit(handleFormSubmit)}>
			<S.Box>
				<Input
					name="name"
					value={watch('name')}
					onChange={(e) => setValue('name', e.target.value)}
					labelName="Nome transação"
					placeholder="Luz"
					inputSize="small"
					error={errors?.name?.message}
				/>
				<SmallButton
					type="button"
					onClick={() => handleSubmitFormAction('revenue')}
				>
					Receita
				</SmallButton>
			</S.Box>
			<S.Box>
				<Input
					name="value"
					value={watch('value')}
					onChange={(e) => setValue('value', parseFloat(e.target.value))}
					labelName="Valor"
					placeholder="255"
					inputSize="small"
					error={errors?.value?.message}
					money
				/>
				<SmallButton
					type="button"
					color="red"
					onClick={() => handleSubmitFormAction('expense')}
				>
					Despesa
				</SmallButton>
			</S.Box>
			<input type="hidden" name="type" ref={inputType} />
		</S.Container>
	)
}

export default FormNewTransaction
