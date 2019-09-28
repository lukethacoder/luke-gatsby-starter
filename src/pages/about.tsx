import React from "react"
import Helmet from "react-helmet"

import { Highlight } from "../components/intro/highlight"
import { Banner } from "../components/banner"

export default () => (
	<>
		<Helmet title="About" />

		<Banner>
			<h2>
				An <Highlight>about</Highlight> page eh?
			</h2>
		</Banner>
	</>
)
