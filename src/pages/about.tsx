import React from "react"
import Helmet from "react-helmet"

import { Highlight } from "../components/intro/highlight"
import { AnimateFadeUp } from "../animations"

export default () => {
	return (
		<>
			<Helmet title="About" />

			<p>
				An <Highlight>about</Highlight> page eh?
			</p>
			<br />

			{/* <AnimateFadeUp> */}
			<img
				style={{
					height: "240px",
					width: "auto",
					padding: "24px",
					margin: "0 auto",
				}}
				src="https://source.unsplash.com/collection/7503176/1600x900"
			/>
			{/* </AnimateFadeUp> */}
		</>
	)
}
