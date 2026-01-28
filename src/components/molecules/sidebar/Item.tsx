import { RiDeleteBack2Fill } from 'react-icons/ri'
import { selectControlAction } from '@/features/controls/actions'

interface SidebarItemProps {
	id: string
	children: React.ReactNode
	active?: boolean
	openDeleteModal?: () => void
}

export const SidebarItem = ({
	id,
	children,
	active,
	openDeleteModal,
}: SidebarItemProps) => {
	const selectControl = () => {
		selectControlAction(id)
	}

	return (
		<li
			onClick={selectControl}
			className={`flex flex-row items-center justify-between p-5 rounded-full mb-4 cursor-pointer
        ${active ? 'bg-primary' : 'hover:bg-slate-200'}
      `}
		>
			<p
				className={`font-bold text-xl
          ${active ? 'text-white' : 'text-slate-500'}
        `}
			>
				{children}
			</p>

			<button
				className="btn btn-ghost hover:shadow-none"
				onClick={openDeleteModal}
			>
				<RiDeleteBack2Fill
					className={`text-3xl ${active ? 'text-white' : 'text-primary'}`}
				/>
			</button>
		</li>
	)
}
