import React, { SFC } from "react"
import styled from "@emotion/styled"

const StyledLayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	> section {
		height: 100%;
	}
`

interface LayoutWrapperProps {
	className?: string
	children?: any
}

const LayoutWrapper: SFC<LayoutWrapperProps> = ({
	children,
	className,
}: LayoutWrapperProps) => (
	<StyledLayoutWrapper className={className}>{children}</StyledLayoutWrapper>
)

export { LayoutWrapper }
