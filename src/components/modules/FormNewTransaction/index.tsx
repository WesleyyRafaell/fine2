import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'

import Input from '@/components/elements/Input'
import SmallButton from '@/components/elements/SmallButton'
import { formatCurrency } from '@/utils/formatCurrency'
import { useControl } from '@/hooks/useControl'
import { TypeCardProps } from '../CardTransaction'

import * as S from './style'
import useTransactions from '@/hooks/useTransactions'

const formNewTransactionSchema = z.object({
	name: z.string().nonempty('Campo obrigatório'),
	value: z.string().nonempty('Campo obrigatório'),
})

type FormNewTransactionData = z.infer<typeof formNewTransactionSchema>

const FormNewTransaction = () => {
	const { selectedControl } = useControl()
	const { setNewTransaction } = useTransactions()

	const form = useRef<HTMLFormElement>(null)
	const inputType = useRef<HTMLInputElement>(null)

	const methods = useForm<FormNewTransactionData>({
		defaultValues: {
			name: '',
			value: '',
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
			inputType.current!.value !== 'green' &&
			inputType.current!.value !== 'red'
		)
			return

		const type: TypeCardProps = inputType.current!.value
		const newTransaction = {
			id: uuidv4(),
			type,
			visible: true,
			...data,
		}

		if (!selectedControl) return
		setNewTransaction(selectedControl.id, newTransaction)

		reset({
			name: '',
			value: '',
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
					onClick={() => handleSubmitFormAction('green')}
				>
					Receita
				</SmallButton>
			</S.Box>
			<S.Box>
				<Input
					name="value"
					value={watch('value')}
					onChange={(e) => setValue('value', formatCurrency(e.target.value))}
					labelName="Valor"
					placeholder="255"
					inputSize="small"
					error={errors?.value?.message}
					money
				/>
				<SmallButton
					type="button"
					color="red"
					onClick={() => handleSubmitFormAction('red')}
				>
					Despesa
				</SmallButton>
			</S.Box>
			<input type="hidden" name="type" ref={inputType} />
		</S.Container>
	)
}

export default FormNewTransaction
