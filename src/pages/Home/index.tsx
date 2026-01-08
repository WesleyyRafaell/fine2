import { useHome } from './useHome'
import View from './view'

const Home = () => {
	const { createControlAction, controls, selectedControl } = useHome()

	return (
		<View
			controls={controls}
			selectedControl={selectedControl}
			newControl={createControlAction}
		/>
	)
}

export default Home
