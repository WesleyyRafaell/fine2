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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	updateControl: function (control: IControl): Promise<IControl> {
		throw new Error('Function not implemented.')
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	deleteControl: function (id: string): Promise<void> {
		throw new Error('Function not implemented.')
	},
}
