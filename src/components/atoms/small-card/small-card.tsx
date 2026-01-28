interface ISmallCard {
	value: string
	text: string
	icon: React.ReactNode
	bg?: string
	color?: string
	colorBorder?: string
}

const SmallCard = ({
	value,
	text,
	icon,
	bg = 'bg-green',
	colorBorder = 'border-green/20',
	color = 'text-green',
}: ISmallCard) => {
	return (
		<div
			className={`flex items-center min-w-80 gap-4  ${bg}/10 px-8 py-4 rounded-3xl border-2 ${colorBorder}`}
		>
			<div
				className={`p-3 ${bg} rounded-full flex items-center justify-center text-white`}
			>
				{icon}
			</div>
			<div className="text-left">
				<p className={`text-xl font-bold ${color} uppercase`}>{text}</p>
				<p className="text-4xl font-extrabold">{value}</p>
			</div>
		</div>
	)
}

export default SmallCard
