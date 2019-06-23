import * as React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"

import normalize from "../../styles/normalize"

import { helmet } from "../../utils/helmet"
import { Devtools } from "../DevTools"

import "./style"

interface IAppLayoutProps {
	children: React.ReactNode
}

const isDev = process.env.NODE_ENV === "development"

export default ({ children }: IAppLayoutProps) => (
	<div>
		<Helmet {...helmet} />
		<Global styles={() => css(normalize)} />

		{children}

		{isDev && <Devtools />}
	</div>
)
