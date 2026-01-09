import { ControlName } from '@/components/elements'
import CardTransaction from '../CardTransaction'
import DisplayResults from '../DisplayResults'
import FormNewTransaction from '../FormNewTransaction'
import * as S from './style'
import { IControl } from '@/features/controls/models'

interface IControlContainer {
	selectedControl: IControl | null
}

const ControlContainer = ({ selectedControl }: IControlContainer) => {
	return (
		<S.Container>
			{selectedControl && (
				<>
					<ControlName selectedControl={selectedControl} />
					<DisplayResults selectedControl={selectedControl} />
					{selectedControl.transactions?.map((item) => (
						<CardTransaction
							key={item.id}
							idControl={selectedControl.id}
							idTransaction={item.id}
							name={item.name}
							value={item.value}
							type={item.type}
							visible={item.visible}
						/>
					))}
				</>
			)}

			<FormNewTransaction />
		</S.Container>
	)
}

export default ControlContainer
