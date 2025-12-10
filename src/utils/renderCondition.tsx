import React, { FC } from 'react'

interface RenderConditionProps {
	children?: React.ReactNode
	condition?: boolean
}

export const RenderCondition: FC<RenderConditionProps> = ({
	children,
	condition,
}) => {
	return condition ? <>{children}</> : <></>
}
