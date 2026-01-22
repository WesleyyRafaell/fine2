import { useEffect, useRef, useState } from 'react'
import { updateNameControlAction } from '@/features/controls/actions'
import { IControl } from '@/features/controls/models'
import { IoClose } from 'react-icons/io5'

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
		<div className="w-[47rem] flex flex-col items-center">
			<div className="w-full mb-[4rem]">
				<div className="flex flex-col">
					<label htmlFor="input" className="label-base">Nome do controle</label>
					<div className="flex justify-between max-w-[22rem] border-b border-[#f7f7f754] pb-[0.5rem]">
						<input
							type="text"
							name="name"
							id="name"
							value={selectedNameInput}
							onChange={(e) => updateNameControl(e.target.value)}
							ref={inputName}
							className="input-base w-[17.9rem]"
						/>
						<IoClose onClick={cleanNameInput} className="cursor-pointer text-white font-bold text-[2rem]" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ControlName
