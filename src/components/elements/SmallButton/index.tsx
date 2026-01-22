import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
	children: string
	color?: 'green' | 'red'
} & ButtonTypes

const SmallButton = ({ children, color = 'green', ...rest }: ButtonProps) => {
	const bgColor = color === 'green' ? 'bg-green' : 'bg-red'

	return (
		<button className={`btn-small ${bgColor} text-white`} {...rest}>
			<p>{children}</p>
		</button>
	)
}

export default SmallButton
