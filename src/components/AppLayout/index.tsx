import * as React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import { useSpring, animated } from "react-spring"

import normalize from "../../styles/normalize"

import { LayoutWrapper } from "./wrapper"
import { helmet } from "../../utils/helmet"
import { Devtools } from "../DevTools"

import "./style"

interface IAppLayoutProps {
	children: React.ReactNode
}

const isDev = process.env.NODE_ENV === "development"

export default ({ children }: IAppLayoutProps) => {
	const fade = useSpring({
		from: {
			opacity: 0,
			transform: "translate(24px, 0px)",
		},
		opacity: 1,
		transform: "translate(0px, 0px)",
	})

	return (
		<div id="hola">
			<Helmet {...helmet} />
			<Global styles={() => css(normalize)} />

			<LayoutWrapper>
				<animated.div style={fade}>{children}</animated.div>
			</LayoutWrapper>

			{isDev && <Devtools />}
		</div>
	)
}
