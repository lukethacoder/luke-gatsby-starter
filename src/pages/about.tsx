import * as React from "react"
import Helmet from "react-helmet"

import { Intro } from "../components/Intro"
import { Highlight } from "../components/Intro/Highlight"
import { AnimateFadeUp } from "../animations"

export default () => {
	return (
		<>
			<Helmet title="About" />

			<Intro>
				<AnimateFadeUp>
					An <Highlight>about</Highlight> page eh?
				</AnimateFadeUp>
				<br />
			</Intro>
		</>
	)
}
