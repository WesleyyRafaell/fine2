import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
	children: string
	passFunction: () => void
} & ButtonTypes

const Button = ({ children, passFunction }: ButtonProps) => {
	return (
		<button onClick={passFunction} className="btn-primary">
			<p>{children}</p>
		</button>
	)
}

export default Button
