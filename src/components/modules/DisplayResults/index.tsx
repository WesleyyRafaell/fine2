import { useEffect, useState } from 'react'

import ResultIndicator from '@/components/elements/ResultIndicator'

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
		<div className="w-[47rem] flex flex-col items-center">
			<ResultIndicator
				moneySignColor="orange"
				total={values?.total}
				text="Total"
			/>
			<div className="flex justify-space-between w-full">
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
			</div>
		</div>
	)
}

export default DisplayResults
