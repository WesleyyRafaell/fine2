interface SidebarSideProps {
	children: React.ReactNode
}

export const SidebarSide = ({ children }: SidebarSideProps) => {
	return (
		<div className="drawer-side">
			<label
				htmlFor="my-drawer-1"
				aria-label="close sidebar"
				className="drawer-overlay"
			/>
			{children}
		</div>
	)
}
