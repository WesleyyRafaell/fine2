import { useState } from 'react'
import * as S from './style'
import Input from '../../elements/Input'
import { useForm } from 'react-hook-form'
import { formatCurrency } from '@/utils/formatCurrency'
import { RenderCondition } from '@/utils/renderCondition'
import SmallButton from '@/components/elements/SmallButton'
import useTransactions from '@/hooks/useTransactions'
import { Transaction } from '@/types/transaction'

export type TypeCardProps = 'revenue' | 'expense'

export type CardTransactionProps = {
	idControl: string
	idTransaction: string
} & Pick<Transaction, 'name' | 'type' | 'value' | 'visible'>

const containerMotion = {
	rest: {
		height: '9.1rem',
		transition: {
			duration: 0.4,
		},
	},
	hover: {
		height: '15rem',
		transition: {
			duration: 0.4,
		},
	},
}

const opacityMotion = {
	rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.4,
		},
	},
}

const CardTransaction = ({
	idControl,
	idTransaction,
	name,
	value,
	type,
	visible,
}: CardTransactionProps) => {
	const [openModal, setOpenModal] = useState(false)

	const {
		setUpdateTransaction,
		setUpdateTypeTransaction,
		setUpdateVisibilityTransaction,
		setDeleteTransaction,
	} = useTransactions()

	const methods = useForm({
		defaultValues: {
			nameEdit: name,
			valueEdit: value,
		},
	})

	const { setValue, watch } = methods

	const nameInput = watch('nameEdit')
	const valueInput = watch('valueEdit')

	const toogleCard = () => {
		setUpdateVisibilityTransaction(idControl, idTransaction, !visible)
	}

	const handleChangeTypeCard = (type: 'red' | 'green') => {
		setUpdateTypeTransaction(idControl, idTransaction, type)
	}

	const handleDelete = () => {
		setDeleteTransaction(idControl, idTransaction)
		setOpenModal(false)
	}

	const handleNameEdit = (value: string) => {
		setValue('nameEdit', value)
		setUpdateTransaction(idControl, idTransaction, 'name', value)
	}

	const handleValueEdit = (value: string) => {
		setValue('valueEdit', formatCurrency(value))
		setUpdateTransaction(
			idControl,
			idTransaction,
			'value',
			formatCurrency(value),
		)
	}

	return (
		<S.Container
			variants={containerMotion}
			initial="rest"
			whileHover="hover"
			animate="rest"
			enablecardcontainer={+visible}
			data-testid="card"
		>
			<S.TypeTransaction data-testid="cardType" type={type} enable={visible} />
			<S.Content>
				<S.HeaderContent variants={opacityMotion}>
					<S.Wrapper>
						<S.CircleButton
							onClick={() => handleChangeTypeCard('red')}
							color="red"
							data-testid="buttonRed"
						/>
						<S.CircleButton
							onClick={() => handleChangeTypeCard('green')}
							color="green"
							data-testid="buttonGreen"
						/>
					</S.Wrapper>
				</S.HeaderContent>
				<S.MainContent>
					<Input
						name="nameEdit"
						value={nameInput}
						onChange={(e) => handleNameEdit(e.target.value)}
						error={undefined}
						inputSize="small"
					/>
					<Input
						name="valueEdit"
						value={valueInput}
						onChange={(e) => handleValueEdit(e.target.value)}
						error={undefined}
						inputSize="small"
						money
					/>
				</S.MainContent>
				<S.FooterContent variants={opacityMotion}>
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
