import React, { FunctionComponent } from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import normalize from "../../styles/normalize"
import { Devtools } from "../dev-tools"
import { Canberra } from "../canberra"

import "./style"

const isDev = process.env.NODE_ENV === "development"

export const AppLayout: FunctionComponent = ({ children }) => {
	return (
		<StyledLayoutRoot>
			<Global styles={() => css(normalize)} />
			<div>{children}</div>
			{isDev && <Devtools />}
		</StyledLayoutRoot>
	)
}

const StyledLayoutRoot = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`
