import React, { FunctionComponent } from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import normalize from "../../styles/normalize"
import { helmet } from "../../utils/helmet"
import { Devtools } from "../dev-tools"

import "./style"

const isDev = process.env.NODE_ENV === "development"

export const AppLayout: FunctionComponent = ({ children }) => {
	return (
		<StyledLayoutRoot>
			<Helmet {...helmet} />
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
