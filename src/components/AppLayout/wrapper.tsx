import * as React from "react"
import styled from "@emotion/styled"

const StyledLayoutMain = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 100vh;
	/* max-width: 0px; */
`

interface LayoutMainProps {
	className?: string
}

const LayoutWrapper: React.SFC<LayoutMainProps> = ({ children, className }) => (
	<StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export { LayoutWrapper }
