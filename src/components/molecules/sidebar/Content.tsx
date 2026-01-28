interface SidebarContentProps {
	children: React.ReactNode
}

export const SidebarContent = ({ children }: SidebarContentProps) => {
	return (
		<div className="drawer-content p-4">
			{children}
			<label
				htmlFor="my-drawer-1"
				className="btn drawer-button lg:hidden bg-primary"
			>
				Open drawer
			</label>
		</div>
	)
}
