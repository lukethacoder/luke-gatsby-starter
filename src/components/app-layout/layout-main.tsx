import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"

export const LayoutMain: FunctionComponent = ({ children }) => (
	<div>{children}</div>
)

const StyledLayoutMain = styled.section`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 100vh;
`
