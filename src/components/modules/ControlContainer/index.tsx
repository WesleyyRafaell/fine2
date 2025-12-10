import { useControl } from '@/hooks/useControl'
import CardTransaction from '../CardTransaction'
import DisplayResults from '../DisplayResults'
import FormNewTransaction from '../FormNewTransaction'
import * as S from './style'

const ControlContainer = () => {
	const { selectedControl } = useControl()

	return (
		<S.Container>
			{selectedControl && (
				<>
					<DisplayResults initialValue={selectedControl?.name} />
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
