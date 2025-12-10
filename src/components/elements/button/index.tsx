import { ButtonHTMLAttributes } from 'react'
import * as S from './style'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
	children: string
	passFunction: () => void
} & ButtonTypes

const Button = ({ children, passFunction }: ButtonProps) => {
	return (
		<S.Button onClick={passFunction}>
			<p>{children}</p>
		</S.Button>
	)
}

export default Button
