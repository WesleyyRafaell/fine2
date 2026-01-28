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
		<div className="flex flex-col items-center w-[30rem]">
			<div className="w-full mb-10">
				<div className="flex flex-col">
					<label
						htmlFor="input"
						className="font-bold text-3xl text-slate-500 ml-5 mb-4"
					>
						Nome do controle
					</label>
					<div className="flex justify-between items-center p-5 rounded-full bg-slate-200  border-b border-[#f7f7f754]">
						<input
							type="text"
							name="name"
							id="name"
							value={selectedNameInput}
							onChange={(e) => updateNameControl(e.target.value)}
							ref={inputName}
							className="input-base w-[17.9rem]"
						/>
						<IoClose
							onClick={cleanNameInput}
							className="cursor-pointer text-slate-500 font-bold text-5xl"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ControlName
