import { ControlName } from '@/components/elements'
import CardTransaction from '../CardTransaction'
import DisplayResults from '../DisplayResults'
import FormNewTransaction from '../FormNewTransaction'
import { IControl } from '@/features/controls/models'
import { useState } from 'react'
import { deleteTransactionAction } from '@/features/transactions/action'

interface IControlContainer {
	selectedControl: IControl | null
	controlsQuantity: number
}

interface IDeleteModalItem {
	id: string | null
	idControl: string | null
	name: string | null
}

const ControlContainer = ({
	selectedControl,
	controlsQuantity,
}: IControlContainer) => {
	const [transactionToDelete, setTransactionToDelete] =
		useState<IDeleteModalItem | null>(null)

	const handleDelete = () => {
		if (transactionToDelete?.idControl && transactionToDelete?.id) {
			deleteTransactionAction(
				transactionToDelete.idControl,
				transactionToDelete.id,
			)
		}
	}

	return (
		<div className="w-full px-4">
			{selectedControl && (
				<>
					<ControlName selectedControl={selectedControl} />
					<DisplayResults selectedControl={selectedControl} />
					<div className="flex flex-col gap-8 mb-[4rem]">
						<div className="grid grid-cols-1 gap-10">
							<div className="control-card rounded-[3rem] p-8 bg-white">
								<div className="flex justify-between items-center mb-10">
									<div className="flex items-center gap-4">
										<div>
											<p className="text-slate-400 font-semibold text-xl">
												{controlsQuantity}{' '}
												{controlsQuantity === 1 ? 'transação' : 'transações'}
											</p>
										</div>
									</div>
								</div>
								{selectedControl.transactions?.map((item) => (
									<CardTransaction
										key={item.id}
										idControl={selectedControl.id}
										id={item.id}
										name={item.name}
										value={item.value}
										type={item.type}
										visible={item.visible}
										openDeleteModal={() => {
											setTransactionToDelete({
												idControl: selectedControl.id,
												id: item.id,
												name: item.name,
											})
											;(
												document.getElementById(
													'modal_to_delete_transaction',
												) as HTMLDialogElement | null
											)?.showModal()
										}}
									/>
								))}
							</div>
						</div>
					</div>
				</>
			)}
			{/* <FormNewTransaction selectedControl={selectedControl} /> */}

			<dialog id="modal_to_delete_transaction" className="modal">
				<div className="modal-box w-11/12 max-w-3xl p-7">
					<h3 className="font-bold text-3xl">
						Deseja apagar a transação{' '}
						<span className="text-primary">{transactionToDelete?.name}</span>?
					</h3>
					<p className="py-4 text-2xl">Esta ação não poderá ser desfeita.</p>
					<div className="modal-action mt-4">
						<form method="dialog">
							<button className="btn btn-neutral">
								<p className="text-2xl">Fechar</p>
							</button>
							<button onClick={handleDelete} className="btn btn-primary ml-5">
								<p className="text-white text-2xl">Apagar</p>
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	)
}

export default ControlContainer
