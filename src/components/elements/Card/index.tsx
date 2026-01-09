import * as S from './style'

import TrashBlueIcon from '../../icons/Trash/index'
import { useState } from 'react'
import { RenderCondition } from '@/utils/renderCondition'
import SmallButton from '../SmallButton'
import {
	deleteControlAction,
	selectControlAction,
} from '@/features/controls/actions'

export type CardProps = {
	id: string
	name: string
}

const Card = ({ id, name = 'Novo controle' }: CardProps) => {
	const [openModal, setOpenModal] = useState(false)

	const selectControl = () => {
		selectControlAction(id)
	}

	const deleteControl = () => {
		deleteControlAction(id)
	}

	return (
		<S.Container>
			<S.Card data-testid="Card" onClick={selectControl}>
				<S.Text>{name}</S.Text>
				<S.ContainerIcon>
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
							<SmallButton color="red" onClick={deleteControl}>
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
