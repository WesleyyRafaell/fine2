interface SidebarContentProps {
	children: React.ReactNode
}

export const SidebarContent = ({ children }: SidebarContentProps) => {
	return (
		<div className="drawer-content p-9">
			<label
				htmlFor="my-drawer-1"
				className="btn drawer-button lg:hidden bg-primary text-white font-bold p-5 rounded-2xl mb-6"
			>
				Abrir controles
			</label>
			{children}
		</div>
	)
}
