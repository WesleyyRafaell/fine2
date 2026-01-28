import { IoAdd } from 'react-icons/io5'

interface SidebarActionsProps {
	onClick: () => void
}

export const SidebarActions = ({ onClick }: SidebarActionsProps) => {
	return (
		<div className="flex items-center justify-between py-4 px-6 mt-8">
			<p className="text-xl font-bold text-neutral">Controles</p>

			<div className="tooltip">
				<div className="tooltip-content">
					<div className="p-2 font-bold">Novo controle</div>
				</div>

				<button onClick={onClick} className="btn  bg-primary p-5 rounded-full">
					<IoAdd className="text-white text-3xl" />
				</button>
			</div>
		</div>
	)
}
