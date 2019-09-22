import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import { widths } from "../../styles/variables"

interface IContainerProps {
	children: ReactNode
}

export const Container = ({ children }: IContainerProps) => (
	<StyledContainer>{children}</StyledContainer>
)

const StyledContainer = styled.section`
	max-width: ${widths.lg}px;
	width: 100%;
	margin: 0 auto;
	padding: 0 16px;
`
