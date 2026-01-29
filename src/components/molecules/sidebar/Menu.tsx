interface SidebarMenuProps {
	children: React.ReactNode
}

export const SidebarMenu = ({ children }: SidebarMenuProps) => {
	return (
		<ul className="menu min-h-full w-4/5 lg:w-96 p-4 lg:pt-0 bg-white">
			{children}
		</ul>
	)
}
