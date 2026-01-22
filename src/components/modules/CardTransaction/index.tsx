import { useState } from 'react'
import Input from '../../elements/Input'

import { RenderCondition } from '@/utils/renderCondition'
import SmallButton from '@/components/elements/SmallButton'
import { ITransaction } from '@/features/transactions/models'
import {
	deleteTransactionAction,
	updateNameTransactionAction,
	updateTypeTransactionAction,
	updateValueTransactionAction,
	updateVisibilityTransactionAction,
} from '@/features/transactions/action'

export type TypeCardProps = 'revenue' | 'expense'

const CardTransaction = ({
	idControl,
	id,
	name,
	value,
	type,
	visible,
}: ITransaction) => {
	const [openModal, setOpenModal] = useState(false)

	const [inputName, setInputName] = useState(name)
	const [inputValue, setInputValue] = useState<number>(value)

	const toogleCard = () => {
		updateVisibilityTransactionAction(idControl, id, !visible)
	}

	const handleChangeTypeCard = (type: TypeCardProps) => {
		updateTypeTransactionAction(idControl, id, type)
	}

	const handleDelete = () => {
		deleteTransactionAction(idControl, id)
		setOpenModal(false)
	}

	const handleNameEdit = (value: string) => {
		setInputName(value)
		updateNameTransactionAction(idControl, id, value)
	}

	const handleValueEdit = (newValue: string) => {
		const numericValue = Number(newValue.replace(/\D/g, '')) / 100

		if (Number.isNaN(numericValue)) return

		setInputValue(numericValue)
		updateValueTransactionAction(idControl, id, numericValue)
	}

	function formatCurrencyFromNumber(value: number): string {
		return value.toLocaleString('pt-BR', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
	}

	const bgColor = visible ? 'bg-lightBlue' : 'bg-darkBlue'
	const typeBarColor = visible ? `bg-${type === 'expense' ? 'expense' : 'revenue'}` : `bg-[${type === 'expense' ? '#A43232' : '#1B9C30'}]`

	return (
		<div data-testid="card" className={`${bgColor} w-[47rem] h-[15rem] rounded-[27px] flex items-center overflow-hidden pr-[2.8rem]`}>
			<div data-testid="cardType" className={`${typeBarColor} h-full w-[2.1rem] mr-[1.5rem]`}></div>
			<div className="w-full flex flex-col h-full justify-between py-[18px]">
				<div className="flex justify-center">
					<div className="w-[6.8rem] flex justify-between">
						<button
							onClick={() => handleChangeTypeCard('expense')}
							className="circle-button bg-red"
							data-testid="buttonRed"
						/>
						<button
							onClick={() => handleChangeTypeCard('revenue')}
							className="circle-button bg-green"
							data-testid="buttonGreen"
						/>
					</div>
				</div>
				<div className="flex justify-between">
					<Input
						name="nameEdit"
						value={inputName}
						onChange={(e) => handleNameEdit(e.target.value)}
						error={undefined}
						inputSize="small"
					/>
					<Input
						name="valueEdit"
						value={formatCurrencyFromNumber(inputValue)}
						onChange={(e) => handleValueEdit(e.target.value)}
						error={undefined}
						inputSize="small"
						money
					/>
				</div>
				<div className="flex justify-between">
					<div className="w-[6.8rem] flex justify-between">
						<button onClick={() => setOpenModal(true)} className="image-button">
							{visible ? (
								<img
									src="/icons/trashIcon.png"
									width={24}
									height={24}
									alt="Trash icon"
								/>
							) : (
								<img
									src="/icons/trashLight.png"
									width={24}
									height={24}
									alt="Trash icon"
								/>
							)}
						</button>
						<button data-testid="buttonDisableCard" onClick={toogleCard} className="image-button">
							{visible ? (
								<img
									src="/icons/disableIcon.png"
									width={22}
									height={22}
									alt="Disable Icon"
								/>
							) : (
								<img
									src="/icons/enable.png"
									width={24}
									height={24}
									alt="Disable Icon"
								/>
							)}
						</button>
					</div>
				</div>
			</div>
			<RenderCondition condition={openModal}>
				<div className="fixed top-0 left-0 w-full h-full bg-[#00000069] box-border flex items-center justify-center">
					<div className="w-[45rem] p-[2rem] bg-white rounded-[0.625rem] -rotate-1">
						<h3 className="text-darkGray text-[1.7rem]">
							Tem certeza que deseja apagar esta transação?
						</h3>
						<div className="pt-[5rem] flex justify-between">
							<SmallButton color="red" onClick={handleDelete}>
								Apagar
							</SmallButton>
							<SmallButton onClick={() => setOpenModal(false)}>
								Cancelar
							</SmallButton>
						</div>
					</div>
				</div>
			</RenderCondition>
		</div>
	)
}

export default CardTransaction
