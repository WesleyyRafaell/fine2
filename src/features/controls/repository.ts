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
		const { updateControl, controls } = ControlsStore.getState()

		const newControls = controls.map((control) =>
			control.id === id ? { ...control, name } : control,
		)

		updateControl(newControls)

		return newControls
	},
	updateValueControl: function (updateValueControl: IControl): void {
		const { updateControl, controls, setSelectedControl } =
			ControlsStore.getState()

		function getTotal(type: 'revenue' | 'expense') {
			return updateValueControl.transactions
				.filter((item) => item.type === type && item.value && item.visible)
				.reduce(
					(previousValue, currentValue) => previousValue + currentValue.value,
					0,
				)
		}

		const totalIncome = getTotal('revenue')

		const totalExpense = getTotal('expense')

		const newValues = {
			expense: totalExpense,
			income: totalIncome,
			total: totalIncome - totalExpense,
		}

		const newControls = controls.map((control) =>
			control.id === updateValueControl.id
				? { ...control, values: newValues }
				: control,
		)

		updateControl(newControls)
		setSelectedControl(updateValueControl.id)
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
