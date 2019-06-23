import * as React from "react"
import styled from "@emotion/styled"

import { Container } from "../Container"
import { Row } from "../Row"
import { Main } from "./style"
import { fonts } from "../../styles/variables"

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
	max-width: 50%;
	padding: 96px 0;
	h3 {
		font-family: ${fonts.serif};
	}
`
