export type ResultIndicatorProps = {
	total?: number
	text?: string
	moneySignColor?: 'red' | 'green' | 'orange'
}

const ResultIndicator = ({
	text,
	total = 0,
	moneySignColor = 'orange',
}: ResultIndicatorProps) => {
	const formatCurrency = (value: number) =>
		new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})
			.format(value)
			.replace(/\s?R\$\s?/, '')

	const getColor = () => {
		switch (moneySignColor) {
			case 'red':
				return 'text-expense'
			case 'green':
				return 'text-green'
			case 'orange':
				return 'text-orange'
			default:
				return 'text-orange'
		}
	}

	return (
		<div>
			<p className="text-medium font-bold text-white mb-[1.2rem]">{text}</p>
			<p className={`text-[1.5rem] font-bold ${getColor()} mb-[0.9rem]`}>R$</p>
			<p
				data-testid="DisplayValue"
				className="text-xxxlarge font-bold text-white pl-[2.0rem]"
			>
				{formatCurrency(total)}
			</p>
		</div>
	)
}

export default ResultIndicator
