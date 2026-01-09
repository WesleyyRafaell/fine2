import { useEffect, useState } from 'react'

import ResultIndicator from '@/components/elements/ResultIndicator'

import * as S from './style'

import { IControl } from '@/features/controls/models'

type DisplayResultsProps = {
	selectedControl: IControl | null
}

type Values = {
	total: number
	income: number
	expense: number
}

const DisplayResults = ({ selectedControl }: DisplayResultsProps) => {
	const [values, setValues] = useState<Values>()

	useEffect(() => {
		if (!selectedControl) return

		// eslint-disable-next-line react-hooks/set-state-in-effect
		setValues(selectedControl.values)
	}, [selectedControl])

	return (
		<S.Container>
			<ResultIndicator
				moneySignColor="orange"
				total={values?.total}
				text="Total"
			/>
			<S.Box>
				<ResultIndicator
					moneySignColor="green"
					total={values?.income}
					text="Receitas"
				/>
				<ResultIndicator
					moneySignColor="red"
					total={values?.expense}
					text="Despesas"
				/>
			</S.Box>
		</S.Container>
	)
}

export default DisplayResults
