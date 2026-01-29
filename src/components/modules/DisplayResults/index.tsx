import { useEffect, useState } from 'react'
import { IoMdTrendingUp, IoMdTrendingDown } from 'react-icons/io'

import { IControl } from '@/features/controls/models'
import { SmallCard } from '@/components/atoms'
import { formatNumberCurrency } from '@/utils/formatCurrency'

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
		<section className="mb-16 text-center">
			<div className="flex flex-col items-center">
				<div className="flex items-center justify-center gap-3">
					<span className="text-4xl font-bold text-primary mt-4">R$</span>
					<h2 className="text-6xl sm:text-9xl font-black tracking-tighter text-slate-900 dark:text-white">
						{formatNumberCurrency(values?.total || 0)}
					</h2>
				</div>
				<div className="flex flex-col sm:flex-row gap-4 mt-8">
					<SmallCard
						value={`+ ${formatNumberCurrency(values?.income || 0)}`}
						text="Receitas"
						icon={<IoMdTrendingUp className="text-white text-3xl" />}
						bg="bg-green/10"
						bgIconColor="bg-green"
						colorBorder="border-green/20"
						color="text-green"
					/>
					<SmallCard
						value={`- ${formatNumberCurrency(values?.expense || 0)}`}
						text="Despesas"
						icon={<IoMdTrendingDown className="text-white text-3xl" />}
						bg="bg-expense/10"
						bgIconColor="bg-expense"
						colorBorder="border-expense/20"
						color="text-expense"
					/>
				</div>
			</div>
		</section>
	)
}

export default DisplayResults
