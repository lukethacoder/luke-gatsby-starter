import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"

import { rem } from "../../styles/mixins"
import { colors } from "../../styles/variables"

export const Intro: FunctionComponent = ({ children }) => {
	return (
		<StyledIntro>
			<div className="intro__wrapper">
				<div>{children}</div>
			</div>
		</StyledIntro>
	)
}

const StyledIntro = styled.div`
	font-size: ${rem(36)}rem;
	padding: 18vh 0;
	border-bottom: 1px solid ${colors.grey.light};
	.intro__wrapper {
		max-width: 56%;
	}
`
