import { ControlName } from '@/components/elements'
import CardTransaction from '../CardTransaction'
import DisplayResults from '../DisplayResults'
import FormNewTransaction from '../FormNewTransaction'
import { IControl } from '@/features/controls/models'

interface IControlContainer {
	selectedControl: IControl | null
}

const ControlContainer = ({ selectedControl }: IControlContainer) => {
	return (
		<div className="w-full px-4">
			{selectedControl && (
				<>
					<ControlName selectedControl={selectedControl} />
					<DisplayResults selectedControl={selectedControl} />
					<div className="flex flex-col gap-8 mb-[4rem]">
						{selectedControl.transactions?.map((item) => (
							<CardTransaction
								key={item.id}
								idControl={selectedControl.id}
								id={item.id}
								name={item.name}
								value={item.value}
								type={item.type}
								visible={item.visible}
							/>
						))}
					</div>
				</>
			)}
			<FormNewTransaction selectedControl={selectedControl} />
		</div>
	)
}

export default ControlContainer
