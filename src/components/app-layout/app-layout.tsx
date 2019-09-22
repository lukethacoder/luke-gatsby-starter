import React, { SFC, ReactNode } from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import normalize from "../../styles/normalize"

import { LayoutMain } from "./layout-main"
import { helmet } from "../../utils/helmet"
import { Devtools } from "../dev-tools"

import "./style"

const isDev = process.env.NODE_ENV === "development"

export const AppLayout = ({ children }: IAppLayoutProps) => {
	return (
		<LayoutRoot>
			<>
				<Helmet {...helmet} />
				<Global styles={() => css(normalize)} />

				<LayoutMain>{children}</LayoutMain>

				{isDev && <Devtools />}
			</>
		</LayoutRoot>
	)
}

const LayoutRoot: SFC<LayoutRootProps> = ({ children }) => (
	<>
		<Global styles={() => css(normalize)} />
		<div>{children}</div>
	</>
)

interface IAppLayoutProps {
	children?: any
}
const StyledLayoutRoot = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

interface LayoutRootProps {
	className?: string
}
