import * as React from "react"
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
}

const LayoutWrapper: React.SFC<LayoutWrapperProps> = ({
	children,
	className,
}) => (
	<StyledLayoutWrapper className={className}>{children}</StyledLayoutWrapper>
)

export { LayoutWrapper }
