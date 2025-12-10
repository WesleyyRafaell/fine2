import {
	deleteControlStorage,
	getControlLocalStorage,
	setControlLocalStorage,
	updateControlLocalStorage,
} from '@/functions/controlsLocalStorage'
import { Control } from '@/types/control'
import { create } from 'zustand'

type ControlsProps = {
	controls: Control[]
	selectedControl: Control | null

	addControl: (control: Control) => void
	updateControl: (controls: Control[]) => void
	updateNameControl: (id: string, name: string) => void
	setSelectedControl: (id: string) => void
	setDeleteControl: (idControl: string) => void
	updateResults: (item: Control) => void
}

export const useControl = create<ControlsProps>((set) => ({
	controls: getControlLocalStorage() || [],
	selectedControl: null,
	setSelectedControl: (id) => {
		set((state) => ({
			selectedControl: state.controls.filter((item) => item.id === id)[0],
		}))
	},
	addControl: (control: Control) => {
		setControlLocalStorage(control)
		set((state) => ({
			controls: [
				...state.controls,
				{
					id: control.id,
					name: control.name,
					values: {
						total: control.values.total,
						income: control.values.income,
						expense: control.values.expense,
					},
					transactions: control.transactions,
				},
			],
		}))
	},
	updateNameControl: (id, name) => {
		set((state) => ({
			controls: [
				...state.controls.map((item) => {
					if (item.id === id) {
						item.name = name
						state.updateResults(item)
						return item
					}

					return item
				}),
			],
		}))
	},
	updateResults: (item) => {
		function getTotal(type: 'green' | 'red') {
			return item.transactions
				.filter((item) => item.type === type && item.value && item.visible)
				.map((item) => parseFloat(item.value.replace('.', '')))
				.reduce(
					(previousValue, currentValue) => previousValue + currentValue,
					0,
				)
		}

		const totalIncome = getTotal('green')

		const totalExpense = getTotal('red')

		const newValues = {
			expense: totalExpense,
			income: totalIncome,
			total: totalIncome - totalExpense,
		}

		const newSelectedControl = {
			...item,
			values: newValues,
		}

		updateControlLocalStorage(newSelectedControl)
		set({ selectedControl: newSelectedControl })
	},
	setDeleteControl: (idControl) => {
		deleteControlStorage(idControl)
		set((state) => ({
			selectedControl: state.controls[0],
			controls: [...state.controls.filter((item) => item.id !== idControl)],
		}))
	},
	updateControl: (controls) => set({ controls }),
}))
