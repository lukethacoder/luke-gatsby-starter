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

			<AnimateFadeUp>
				<img
					style={{
						height: "240px",
						width: "auto",
						padding: "24px",
						margin: "0 auto",
					}}
					src="https://source.unsplash.com/collection/7503176/1600x900"
				/>
			</AnimateFadeUp>
		</>
	)
}
