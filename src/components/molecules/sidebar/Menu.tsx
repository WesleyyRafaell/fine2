interface SidebarMenuProps {
	children: React.ReactNode
}

export const SidebarMenu = ({ children }: SidebarMenuProps) => {
	return <ul className="menu min-h-full w-96 p-4">{children}</ul>
}
