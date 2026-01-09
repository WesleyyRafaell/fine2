import { IControl, IControlRepository } from './models'
import { ControlsStore } from '@/store/control-store'

export const ControlsRepository: IControlRepository = {
	createControl(): IControl {
		const { addControl, setSelectedControl } = ControlsStore.getState()
		const newIdControl = crypto.randomUUID()

		const control = {
			id: newIdControl,
			name: 'Novo controle',
			values: {
				total: 0,
				income: 0,
				expense: 0,
			},
			transactions: [],
		}

		addControl(control)
		setSelectedControl(control.id)

		return control
	},
	getAllControls: function (): IControl[] {
		const { controls } = ControlsStore.getState()
		return controls
	},
	updateNameControl: function (id: string, name: string): IControl[] {
		const { updateControl } = ControlsStore.getState()

		const { controls } = ControlsStore.getState()

		const newControls = controls.map((control) =>
			control.id === id ? { ...control, name } : control,
		)

		updateControl(newControls)

		return newControls
	},
	deleteControl: function (id: string): void {
		const { controls, updateControl, setSelectedControl } =
			ControlsStore.getState()

		const newControls = controls.filter((control) => control.id !== id)

		updateControl(newControls)
		setSelectedControl(null)
	},
	selectControl: function (id: string): void {
		const { setSelectedControl } = ControlsStore.getState()

		setSelectedControl(id)
	},
}
