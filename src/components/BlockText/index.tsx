import * as React from "react"
import styled from "@emotion/styled"

import { Container } from "../Container"
import { Row } from "../Row"
import { Main } from "./style"
import { fonts, breakpoints } from "../../styles/variables"
import { rem } from "../../styles/mixins"

interface IBlockTextProps {
	heading: string
	description: React.ReactNode
}

export const BlockText = ({ heading, description }: IBlockTextProps) => (
	<Container>
		<Main>
			<Row>
				<BlockTextContainer>
					<h3>{heading}</h3>
					<p>{description}</p>
				</BlockTextContainer>
			</Row>
		</Main>
	</Container>
)

const BlockTextContainer = styled.div`
	max-width: 100%;
	padding: 10vh 0;
	@media (min-width: ${rem(breakpoints.md)}em) {
		max-width: 50%;
	}
	h3 {
		font-family: ${fonts.serif};
	}
`
