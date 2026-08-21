import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { RiDraggable } from 'react-icons/ri'
import CardTransaction from '.'

type SortableCardTransactionProps = {
	idControl: string
	id: string
	name: string
	value: number
	type: 'revenue' | 'expense'
	visible: boolean
	openDeleteModal?: () => void
}

const SortableCardTransaction = ({
	idControl,
	id,
	name,
	value,
	type,
	visible,
	openDeleteModal,
}: SortableCardTransactionProps) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
		zIndex: isDragging ? 50 : ('auto' as const),
	}

	return (
		<div ref={setNodeRef} style={style}>
			<div className="flex items-center gap-2">
				<button
					{...attributes}
					{...listeners}
					className="cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 transition-colors p-2 shrink-0"
					aria-label="Arrastar para reordenar"
				>
					<RiDraggable className="text-2xl" />
				</button>
				<div className="flex-1">
					<CardTransaction
						idControl={idControl}
						id={id}
						name={name}
						value={value}
						type={type}
						visible={visible}
						openDeleteModal={openDeleteModal}
					/>
				</div>
			</div>
		</div>
	)
}

export default SortableCardTransaction
