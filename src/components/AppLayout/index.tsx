import * as React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

import normalize from "../../styles/normalize"
import Logo from "../../assets/svg/luke-logo.svg"

import { helmet } from "../../utils/helmet"
import { Header } from "../Header"
import { Link as HeaderLink } from "../Header/Link"
import { Footer } from "../Footer"
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

		<Header>
			<HeaderLink name="about" to="/about" />

			<HeaderLink
				name="github"
				to="https://github.com/lukethacoder/gatsby-starter-luke"
				icon={<FontAwesomeIcon icon={["fab", "github"]} />}
			/>
		</Header>

		{children}

		<Footer
			logo={<Logo />}
			social={[
				{
					icon: <FontAwesomeIcon icon={["fab", "twitter"]} />,
					to: "https://twitter.com/lu_ke____",
				},
				{
					icon: <FontAwesomeIcon icon={["fab", "github"]} />,
					to: "https://github.com/lukethacoder",
				},
				{
					icon: <FontAwesomeIcon icon={["fab", "instagram"]} />,
					to: "https://www.instagram.com/lukesecombdigital",
				},
				{
					icon: <FontAwesomeIcon icon={["fab", "linkedin"]} />,
					to: "https://linkedin.com/in/luke-secomb",
				},
			]}
		/>

		{isDev && <Devtools />}
	</div>
)
