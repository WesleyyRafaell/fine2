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
						<ControlContainer selectedControl={selectedControl} />
					</RenderCondition>
				</Sidebar.Content>

				<Sidebar.Side>
					<Sidebar.Header />
					<Sidebar.Actions onClick={newControl} />

					<Sidebar.Menu>
						{controls?.map((item) => (
							<Sidebar.Item
								id={item.id}
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
				<div className="modal-box p-7">
					<h3 className="font-bold text-lg">
						Deseja apagar o controle{' '}
						<span className="text-primary">{controlToDelete?.name}</span>?
					</h3>
					<p className="py-4">Esta ação não poderá ser desfeita.</p>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn btn-neutral">Fechar</button>
							<button onClick={deleteControl} className="btn btn-primary ml-5">
								Apagar
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	)
}

export default View
