import * as S from './style'

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
		<S.Container>
			<S.Text>{text}</S.Text>
			<S.MoneySign moneySignColor={moneySignColor}>R$</S.MoneySign>
			<S.Number data-testid="DisplayValue">{formatCurrency(total)}</S.Number>
		</S.Container>
	)
}

export default ResultIndicator
