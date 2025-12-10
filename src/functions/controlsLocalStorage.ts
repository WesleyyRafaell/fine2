import { Control } from '@/types/control'

export const getControlLocalStorage = () => {
	if (typeof window === 'undefined') return

	return localStorage.getItem('control')
		? JSON.parse(String(localStorage.getItem('control')))
		: []
}

export const setControlLocalStorage = (newSelectedControl: Control) => {
	if (typeof window === 'undefined') return

	const controls = getControlLocalStorage()

	controls.push(newSelectedControl)

	localStorage.setItem('control', JSON.stringify(controls))
}

export const updateControlLocalStorage = (controlToUpdate: Control) => {
	if (typeof window === 'undefined') return

	const controls = getControlLocalStorage()

	const newControls = controls.map((item: Control) => {
		if (item.id === controlToUpdate.id) {
			return controlToUpdate
		}

		return item
	})

	localStorage.setItem('control', JSON.stringify(newControls))
}

export const deleteControlStorage = (idControl: string) => {
	if (typeof window === 'undefined') return

	const controls = getControlLocalStorage()

	const newControls = controls.filter((item: Control) => item.id !== idControl)
	localStorage.setItem('control', JSON.stringify(newControls))
}
