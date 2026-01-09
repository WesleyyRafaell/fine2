import { updateControlLocalStorage } from '@/functions/controlsLocalStorage'
import { Control } from '@/types/control'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type ControlsProps = {
	controls: Control[]
	selectedControl: Control | null

	setSelectedControl: (id: string | null) => void
	addControl: (control: Control) => void
	updateControl: (controls: Control[]) => void
	updateResults: (item: Control) => void
}

export const ControlsStore = create<ControlsProps>()(
	persist(
		(set): ControlsProps => ({
			controls: [] as Control[],
			selectedControl: null,
			setSelectedControl: (id) => {
				set((state) => ({
					selectedControl: id
						? state.controls.filter((item) => item.id === id)[0]
						: null,
				}))
			},
			addControl: (control: Control) => {
				set((state) => ({
					controls: [...state.controls, { ...control }],
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
			updateControl: (controls) => set({ controls }),
		}),
		{ name: 'control-storage', storage: createJSONStorage(() => localStorage) },
	),
)
