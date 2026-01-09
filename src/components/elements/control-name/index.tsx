import { useEffect, useRef, useState } from 'react'

import * as S from './style'
import { updateNameControlAction } from '@/features/controls/actions'
import { IControl } from '@/features/controls/models'

type ControlNameProps = {
	selectedControl: IControl
}

const ControlName = ({ selectedControl }: ControlNameProps) => {
	const [selectedNameInput, setSelectedNameInput] = useState(
		selectedControl?.name || '',
	)
	const inputName = useRef<HTMLInputElement>(null)

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setSelectedNameInput(selectedControl?.name)
	}, [selectedControl])

	const cleanNameInput = () => {
		updateNameControlAction(selectedControl.id, '')
		setSelectedNameInput('')
		inputName?.current?.focus()
	}

	const updateNameControl = (name: string) => {
		setSelectedNameInput(name)
		updateNameControlAction(selectedControl.id, name)
	}

	return (
		<S.Container>
			<S.ContainerForm>
				<S.ContainerInput>
					<S.Label htmlFor="input">Nome do controle</S.Label>
					<S.WrapperInput>
						<S.TextInput
							inputSize="regular"
							type="text"
							name="name"
							id="name"
							value={selectedNameInput}
							onChange={(e) => updateNameControl(e.target.value)}
							ref={inputName}
						/>
						<S.Icon onClick={cleanNameInput} />
					</S.WrapperInput>
				</S.ContainerInput>
			</S.ContainerForm>
		</S.Container>
	)
}

export default ControlName
