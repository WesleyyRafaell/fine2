import { IControl } from '@/features/controls/models'
import { Sidebar } from '../sidebar'

interface SidebarMenuProps {
	children: React.ReactNode
	controls: IControl[]
	newControl: () => void
}

const SidebarMenu = ({ children, controls, newControl }: SidebarMenuProps) => {
	return (
		<Sidebar.Root>
			<Sidebar.Content>{children}</Sidebar.Content>

			<Sidebar.Side>
				<Sidebar.Header />
				<Sidebar.Actions onClick={newControl} />

				<Sidebar.Menu>
					{controls?.map((item) => (
						<Sidebar.Item id={item.id}>{item.name}</Sidebar.Item>
					))}
				</Sidebar.Menu>
			</Sidebar.Side>
		</Sidebar.Root>
	)
}

export default SidebarMenu
