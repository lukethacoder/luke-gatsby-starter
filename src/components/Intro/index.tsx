import * as React from "react"
import styled from "@emotion/styled"

import { rem } from "../../styles/mixins"

import { Container } from "../Container"
import { Row } from "../Row"
import { colors } from "../../styles/variables"

interface IIntroProps {
	children: React.ReactNode
}

export const Intro = ({ children }: IIntroProps) => {
	return (
		<Container>
			<StyledIntro>
				<Row>
					<div className="intro__wrapper">
						<p>{children}</p>
					</div>
				</Row>
			</StyledIntro>
		</Container>
	)
}

const StyledIntro = styled.div`
	font-size: ${rem(36)}rem;
	padding: 136px 0;
	border-bottom: 1px solid ${colors.grey.light};
	.intro__wrapper {
		max-width: 56%;
	}
`
