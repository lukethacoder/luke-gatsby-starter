import * as React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"

import normalize from "../../styles/normalize"

import { LayoutWrapper } from "./wrapper"
import LayoutMain from "./LayoutMain"
import { Header } from "../Header"
import { helmet } from "../../utils/helmet"
import { Devtools } from "../DevTools"

import "./style"

interface IAppLayoutProps {
	children: React.ReactNode
}
const StyledLayoutRoot = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

interface LayoutRootProps {
	className?: string
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
		<LayoutRoot>
			<Helmet {...helmet} />
			<Global styles={() => css(normalize)} />

			<Header />

			{/* <Header /> */}
			<LayoutMain>
				<animated.div style={fade}>{children}</animated.div>
			</LayoutMain>
			{/* <Footer /> */}

			{isDev && <Devtools />}
		</LayoutRoot>
	)
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
	<>
		<Global styles={() => css(normalize)} />
		<StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
	</>
)
