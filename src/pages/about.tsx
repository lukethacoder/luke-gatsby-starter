import * as React from "react"
import Helmet from "react-helmet"

import { Intro } from "../components/Intro"
import { Highlight } from "../components/Intro/Highlight"

export default () => (
	<>
		<Helmet title="About" />

		<Intro>
			An <Highlight>about</Highlight> page eh?
			<br />
		</Intro>
	</>
)
