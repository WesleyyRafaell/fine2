import Card from '../../components/elements/Card'
import ControlContainer from '../../components/modules/ControlContainer'
import { RenderCondition } from '../../utils/renderCondition'
import Button from '../../components/elements/button'
import { IControl } from '@/features/controls/models'

interface IViewProps {
	controls: IControl[]
	selectedControl: IControl | null
	newControl: () => void
}

const View = ({ controls, selectedControl, newControl }: IViewProps) => {
	return (
		<div className="bg-blue p-[5rem] min-h-screen">
			<div className="max-w-[120rem] mx-auto flex">
				<div className="w-1/2 flex items-start justify-start flex-col">
					<Button onClick={newControl}>Novo controle</Button>
					<div className="mt-[2rem] flex-wrap flex [&>div]:m-[0_1rem_1rem_0]">
						{controls?.map((item) => (
							<Card key={item.id} id={item.id} name={item.name} />
						))}
					</div>
				</div>
				<div className="w-1/2 flex items-start justify-end">
					<RenderCondition condition={!!selectedControl}>
						<ControlContainer selectedControl={selectedControl} />
					</RenderCondition>
				</div>
			</div>
		</div>
	)
}

export default View
