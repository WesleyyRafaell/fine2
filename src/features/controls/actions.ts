import { IControl } from './models'
import { ControlsRepository } from './repository'

export function createControlAction() {
	const result = ControlsRepository.createControl()

	if (!result) {
		return { success: false, error: 'Error' }
	}

	return { success: true, group: result }
}

export function getAllControlsAction() {
	const result = ControlsRepository.getAllControls()

	if (!result) {
		return { success: false, error: 'Error' }
	}

	return { success: true, controls: result }
}

export function updateNameControlAction(id: string, name: string) {
	const result = ControlsRepository.updateNameControl(id, name)

	if (!result) {
		return { success: false, error: 'Error' }
	}

	return { success: true, controls: result }
}

export function updateValueControlAction(control: IControl) {
	ControlsRepository.updateValueControl(control)

	return { success: true }
}

export function selectControlAction(id: string) {
	ControlsRepository.selectControl(id)

	return { success: true }
}

export function deleteControlAction(id: string) {
	ControlsRepository.deleteControl(id)

	return { success: true }
}
