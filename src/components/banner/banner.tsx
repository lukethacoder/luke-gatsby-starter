import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { widths, colors } from "../../styles/variables"
import { SpringFadeUp } from "../../utils/animations"

export const Banner: FunctionComponent = ({ children }) => (
	<StyledBanner>
		<SpringFadeUp>{children}</SpringFadeUp>
	</StyledBanner>
)

const StyledBanner = styled.section`
	max-width: ${widths.lg}px;
	width: 100%;
	margin: 0 auto;
	padding: 18vh 16px;
	border-bottom: 1px solid ${colors.grey.light};
`
