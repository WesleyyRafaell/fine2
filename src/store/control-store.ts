import { IControl } from '@/features/controls/models'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type ControlsProps = {
	controls: IControl[]
	selectedControl: IControl | null

	setSelectedControl: (id: string | null) => void
	addControl: (control: IControl) => void
	updateControl: (controls: IControl[]) => void
}

export const ControlsStore = create<ControlsProps>()(
	persist(
		(set): ControlsProps => ({
			controls: [] as IControl[],
			selectedControl: null,
			setSelectedControl: (id) => {
				set((state) => ({
					selectedControl: id
						? state.controls.filter((item) => item.id === id)[0]
						: null,
				}))
			},
			addControl: (control: IControl) => {
				set((state) => ({
					controls: [...state.controls, { ...control }],
				}))
			},

			updateControl: (controls) => set({ controls }),
		}),
		{ name: 'control-storage', storage: createJSONStorage(() => localStorage) },
	),
)
