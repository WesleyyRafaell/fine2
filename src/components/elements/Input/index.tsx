import { InputHTMLAttributes, useId } from 'react'
import { useForm } from 'react-hook-form'

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

	const inputWidth = inputSize === 'regular' ? 'w-[17.9rem]' : 'w-[7.9rem]'

	return (
		<div className="flex flex-col">
			{!!labelName && <label htmlFor="input" className="label-base">{labelName}</label>}
			<div className="flex">
				{money ? (
					<>
						<p className="money-symbol">R$</p>
						<input
							type="text"
							placeholder={placeholder}
							className={`input-base ${inputWidth}`}
							{...propsInput}
						/>
					</>
				) : (
					<input
						type="text"
						placeholder={placeholder}
						className={`input-base ${inputWidth}`}
						{...propsInput}
					/>
				)}
			</div>
			{error && <p className="error-label">{error}</p>}
		</div>
	)
}

export default Input
