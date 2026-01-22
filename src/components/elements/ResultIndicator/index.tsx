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

	return (
		<div>
			<p className="text-medium font-bold text-white mb-[1.2rem]">{text}</p>
			<p className={`text-[1.5rem] font-bold text-${moneySignColor} mb-[0.9rem]`}>R$</p>
			<p data-testid="DisplayValue" className="text-xxxlarge font-bold text-white pl-[2.0rem]">{formatCurrency(total)}</p>
		</div>
	)
}

export default ResultIndicator
