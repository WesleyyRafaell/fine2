import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
	children: string
	onClick: () => void
} & ButtonTypes

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className="btn-primary w-[187px]">
			<p className="text-[18px] font-bold text-white">{children}</p>
		</button>
	)
}

export default Button
