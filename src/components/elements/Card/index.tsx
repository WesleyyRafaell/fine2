import * as S from './style'

import TrashBlueIcon from '../../icons/Trash/index'
import { useControl } from '@/hooks/useControl'
import { useState } from 'react'
import { RenderCondition } from '@/utils/renderCondition'
import SmallButton from '../SmallButton'

const cardMotion = {
	rest: {
		height: 81,
		transition: {
			duration: 0.3,
		},
	},
	hover: {
		height: 109,
		transition: {
			duration: 0.4,
		},
	},
}

const textMotion = {
	rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.4,
		},
	},
}

export type CardProps = {
	id: string
	name: string
}

const Card = ({ id, name = 'Novo controle' }: CardProps) => {
	const [openModal, setOpenModal] = useState(false)
	const { setSelectedControl, setDeleteControl } = useControl()

	const handleClickSelectCard = () => {
		setSelectedControl(id)
	}

	const handleDelete = () => {
		setDeleteControl(id)
	}

	return (
		<S.Container>
			<S.Card
				variants={cardMotion}
				initial="rest"
				whileHover="hover"
				animate="rest"
				data-testid="Card"
				onClick={handleClickSelectCard}
			>
				<S.Text>{name}</S.Text>
				<S.ContainerIcon variants={textMotion} data-testid="ContainerIcon">
					<S.BoxIcon onClick={() => setOpenModal(true)}>
						<TrashBlueIcon />
					</S.BoxIcon>
				</S.ContainerIcon>
			</S.Card>
			<RenderCondition condition={openModal}>
				<S.WrapperModal>
					<S.Modal>
						<S.TitleModal>
							Tem certeza que deseja apagar este controle?
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

export default Card
