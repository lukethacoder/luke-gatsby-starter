import * as React from "react"
import Helmet from "react-helmet"

import { Intro } from "../components/Intro"
import { Highlight } from "../components/Intro/Highlight"
import { BlockText } from "../components/BlockText"

export default () => (
	<>
		<Helmet title="Home" />

		<Intro>
			Opinionated starter using: <Highlight>TypeScript</Highlight>,&nbsp;
			<Highlight>styled-components</Highlight>,{" "}
			<Highlight>React Spring</Highlight>, &{" "}
			<Highlight>React Hooks</Highlight>.
		</Intro>

		<BlockText
			heading="Documentation"
			description={
				<>
					Documentation for this GatsbyJS starter can be found{" "}
					<a
						href="https://github.com/lukethacoder/gatsby-starter-luke"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					.
				</>
			}
		/>
	</>
)
