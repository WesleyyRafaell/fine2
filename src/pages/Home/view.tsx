import Card from '../../components/elements/Card'
import ControlContainer from '../../components/modules/ControlContainer'
import { RenderCondition } from '../../utils/renderCondition'

import * as S from '../../containers/Home/style'
import Button from '../../components/elements/button'
import { IControl } from '@/features/controls/models'

interface IViewProps {
	controls: IControl[]
	selectedControl: IControl | null
	newControl: () => void
}

const View = ({ controls, selectedControl, newControl }: IViewProps) => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.Box>
					<Button passFunction={newControl}>Novo controle</Button>
					<S.CardsContainer>
						{controls?.map((item) => (
							<Card key={item.id} id={item.id} name={item.name} />
						))}
					</S.CardsContainer>
				</S.Box>
				<S.Box>
					<RenderCondition condition={!!selectedControl}>
						<ControlContainer selectedControl={selectedControl} />
					</RenderCondition>
				</S.Box>
			</S.Wrapper>
		</S.Container>
	)
}

export default View
