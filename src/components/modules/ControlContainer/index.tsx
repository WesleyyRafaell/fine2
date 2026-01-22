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
		<div className="[&>div:first-child]:mb-[7.5rem] [&>div:nth-child(3)]:mt-[7.5rem] [&>div:nth-child(5)]:m-[3rem_0]">
			{selectedControl && (
				<>
					<ControlName selectedControl={selectedControl} />
					<DisplayResults selectedControl={selectedControl} />
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
				</>
			)}
			<FormNewTransaction selectedControl={selectedControl} />
		</div>
	)
}

export default ControlContainer
