import * as React from "react"
import styled from "@emotion/styled"

import { rem } from "../../styles/mixins"

const StyledLayoutMain = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: ${rem(48)}em 0 0;
	min-height: 100vh;
	/* max-width: 0px; */
`

interface LayoutMainProps {
	className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
	<StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
