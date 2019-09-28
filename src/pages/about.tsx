import React from "react"
import Helmet from "react-helmet"

import { Highlight } from "../components/intro/highlight"
import { SpringFadeUp } from "../utils/animations"
import { Intro } from "../components/intro"
import { Container } from "../components/container"
import { Banner } from "../components/banner"

export default () => (
	<>
		<Helmet title="About" />

		<Banner>
			<h2>
				An <Highlight>about</Highlight> page eh?
			</h2>
		</Banner>
		<Container>
			<br />

			<SpringFadeUp>
				<img
					style={{
						height: "240px",
						width: "auto",
						padding: "24px",
						margin: "0 auto",
					}}
					src="https://source.unsplash.com/collection/7503176/1600x900"
				/>
			</SpringFadeUp>
		</Container>
	</>
)
