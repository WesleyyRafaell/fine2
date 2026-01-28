interface SidebarRootProps {
	children: React.ReactNode
}

export const SidebarRoot = ({ children }: SidebarRootProps) => {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
			{children}
		</div>
	)
}
