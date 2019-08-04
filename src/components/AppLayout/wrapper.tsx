import * as React from "react"
import styled from "@emotion/styled"

const StyledLayoutMain = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	> section {
		height: 100%;
	}
`

interface LayoutMainProps {
	className?: string
}

const LayoutWrapper: React.SFC<LayoutMainProps> = ({ children, className }) => (
	<StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export { LayoutWrapper }
