import { createControlAction } from '@/features/controls/actions'

import { ControlsStore } from '@/store/control-store'

export const useHome = () => {
	const controls = ControlsStore((state) => state.controls)
	const selectedControl = ControlsStore((state) => state.selectedControl)

	return {
		createControlAction,
		controls,
		selectedControl,
	}
}
