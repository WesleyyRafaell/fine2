import { useState } from 'react'
import * as S from './style'
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

	return (
		<S.Container enablecardcontainer={+visible} data-testid="card">
			<S.TypeTransaction data-testid="cardType" type={type} enable={visible} />
			<S.Content>
				<S.HeaderContent>
					<S.Wrapper>
						<S.CircleButton
							onClick={() => handleChangeTypeCard('expense')}
							color="red"
							data-testid="buttonRed"
						/>
						<S.CircleButton
							onClick={() => handleChangeTypeCard('revenue')}
							color="green"
							data-testid="buttonGreen"
						/>
					</S.Wrapper>
				</S.HeaderContent>
				<S.MainContent>
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
				</S.MainContent>
				<S.FooterContent>
					<S.Wrapper>
						<S.ImageButton onClick={() => setOpenModal(true)}>
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
						</S.ImageButton>
						<S.ImageButton data-testid="buttonDisableCard" onClick={toogleCard}>
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
						</S.ImageButton>
					</S.Wrapper>
				</S.FooterContent>
			</S.Content>
			<RenderCondition condition={openModal}>
				<S.WrapperModal>
					<S.Modal>
						<S.TitleModal>
							Tem certeza que deseja apagar esta transação?
						</S.TitleModal>
						<S.ContainerButtonsModal>
							<SmallButton color="red" onClick={handleDelete}>
								Apagar
							</SmallButton>
							<SmallButton onClick={() => setOpenModal(false)}>
								Cancelar
							</SmallButton>
						</S.ContainerButtonsModal>
					</S.Modal>
				</S.WrapperModal>
			</RenderCondition>
		</S.Container>
	)
}

export default CardTransaction
