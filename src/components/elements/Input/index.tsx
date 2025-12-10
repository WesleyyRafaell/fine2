import { InputHTMLAttributes, useId } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './style'

export type InputProps = {
	money?: boolean
	labelName?: string
	inputSize?: 'small' | 'regular'
	error: string | undefined
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
	name = '',
	money = false,
	labelName,
	placeholder = '',
	inputSize = 'regular',
	error,
	...rest
}: InputProps) => {
	const inputId = useId()

	const { register } = useForm()

	const propsInput = {
		...(name && { ...register(name) }),
		...rest,
		id: inputId,
	}

	return (
		<S.Container>
			{!!labelName && <S.Label htmlFor="input">{labelName}</S.Label>}
			<S.ContainerInput>
				{money ? (
					<>
						<S.MoneySymbol>R$</S.MoneySymbol>
						<S.Input
							type="text"
							placeholder={placeholder}
							inputSize={inputSize}
							{...propsInput}
						/>
					</>
				) : (
					<S.Input
						type="text"
						placeholder={placeholder}
						inputSize={inputSize}
						{...propsInput}
					/>
				)}
			</S.ContainerInput>
			{error && <S.ErrorLabel>{error}</S.ErrorLabel>}
		</S.Container>
	)
}

export default Input
