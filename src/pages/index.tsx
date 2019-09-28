import React from "react"
import Helmet from "react-helmet"

import { useTrail, animated } from "react-spring"

import { Intro } from "../components/intro"
import { Banner } from "../components/banner"
import { Container } from "../components/container"
import { Columns } from "../components/columns"
import { Highlight } from "../components/intro/highlight"
import { SpringFadeUp, TrailFadeUp } from "../utils/animations"

export default () => {
	const trail = useTrail(6, {
		from: {
			opacity: 0,
			transform: "translate(0px, 24px)",
		},
		opacity: 1,
		transform: "translate(0px, 0px)",
	})
	return (
		<>
			<Helmet title="Home" />

			<Banner>
				<h2>
					Opinionated starter using:
					<br />
					<Highlight>TypeScript</Highlight>,{" "}
					<Highlight>styled-components</Highlight>, <br />
					<Highlight>React Hooks</Highlight> &{" "}
					<Highlight>react-spring</Highlight>.
				</h2>
			</Banner>

			<Container>
				<Intro>
					<SpringFadeUp>
						<p>
							Documentation for this GatsbyJS starter can be found{" "}
							<a
								href="https://github.com/lukethacoder/gatsby-starter-luke"
								target="_blank"
								rel="noopener noreferrer"
							>
								here
							</a>
							.
						</p>
					</SpringFadeUp>
				</Intro>
			</Container>
		</>
	)
}
