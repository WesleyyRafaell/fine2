import ControlContainer from '../../components/modules/ControlContainer'
import { RenderCondition } from '../../utils/renderCondition'
import { IControl } from '@/features/controls/models'
import { deleteControlAction } from '@/features/controls/actions'
import { Sidebar } from '@/components/molecules/sidebar'
import { useState } from 'react'

interface IViewProps {
	controls: IControl[]
	selectedControl: IControl | null
	newControl: () => void
}

interface IDeleteModalItem {
	id: string | null
	name: string | null
}

const View = ({ controls, selectedControl, newControl }: IViewProps) => {
	const [controlToDelete, setControlToDelete] =
		useState<IDeleteModalItem | null>(null)

	const deleteControl = () => {
		if (controlToDelete?.id) {
			deleteControlAction(controlToDelete.id)
		}
	}
	return (
		<div className="bg-[#F0F4FF]">
			<Sidebar.Root>
				<Sidebar.Content>
					<RenderCondition condition={!!selectedControl}>
						<ControlContainer
							selectedControl={selectedControl}
							controlsQuantity={selectedControl?.transactions.length || 0}
						/>
					</RenderCondition>
				</Sidebar.Content>

				<Sidebar.Side>
					<Sidebar.Menu>
						<Sidebar.Header />
						<Sidebar.Actions onClick={newControl} />

						{controls?.map((item) => (
							<Sidebar.Item
								key={item.id}
								id={item.id}
								active={selectedControl?.id === item.id}
								openDeleteModal={() => {
									setControlToDelete({ id: item.id, name: item.name })
									;(
										document.getElementById(
											'modal_to_delete_control',
										) as HTMLDialogElement | null
									)?.showModal()
								}}
							>
								{item.name}
							</Sidebar.Item>
						))}
					</Sidebar.Menu>
				</Sidebar.Side>
			</Sidebar.Root>

			<dialog id="modal_to_delete_control" className="modal">
				<div className="modal-box w-11/12 max-w-3xl p-7">
					<h3 className="font-bold text-3xl">
						Deseja apagar o controle{' '}
						<span className="text-primary">{controlToDelete?.name}</span>?
					</h3>
					<p className="py-4 text-2xl">Esta ação não poderá ser desfeita.</p>
					<div className="modal-action mt-4">
						<form method="dialog">
							<button className="btn btn-neutral">
								<p className="text-2xl">Fechar</p>
							</button>
							<button onClick={deleteControl} className="btn btn-primary ml-5">
								<p className="text-white text-2xl">Apagar</p>
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	)
}

export default View
