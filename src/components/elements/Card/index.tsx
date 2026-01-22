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
		<div>
			<div data-testid="Card" onClick={selectControl} className="w-[187px] h-[109px] cursor-pointer rounded-[12px] text-center pt-[27px] bg-orange">
				<p className="text-[18px] font-bold text-white">{name}</p>
				<div className="pt-[13.5px] flex justify-center items-center">
					<div className="bg-[#00000000] inline-block w-[28.3px] h-[28.3px] rounded-full flex justify-center items-center transition-all duration-500 hover:bg-[#0000001a]" onClick={() => setOpenModal(true)}>
						<TrashBlueIcon />
					</div>
				</div>
			</div>
			<RenderCondition condition={openModal}>
				<div className="fixed top-0 left-0 w-full h-full bg-[#00000069] box-border flex items-center justify-center">
					<div className="w-[45rem] p-[2rem] bg-white rounded-[0.625rem] -rotate-1">
						<h3 className="text-darkGray text-[1.7rem]">
							Tem certeza que deseja apagar este controle?
						</h3>
						<div className="pt-[5rem] flex justify-between">
							<SmallButton color="red" onClick={deleteControl}>
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

export default Card
