import { ControlsRepository } from './repository'

export async function createControlAction() {
	const result = ControlsRepository.createControl()

	if (!result) {
		return { success: false, error: 'Error' }
	}

	return { success: true, group: result }
}

export async function getAllControlsAction() {
	const result = ControlsRepository.getAllControls()

	if (!result) {
		return { success: false, error: 'Error' }
	}

	return { success: true, controls: result }
}
