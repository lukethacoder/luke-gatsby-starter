import * as React from "react"
import Helmet from "react-helmet"
import TransitionLink from "gatsby-plugin-transition-link"
import { useSpring, animated } from "react-spring"

import { Intro } from "../components/Intro"
import { Highlight } from "../components/Intro/Highlight"
import { SpringCustom, SpringLink } from "../components/Link/spring"

export default () => {
	const fade = useSpring({
		from: {
			opacity: 0,
			transform: "translate(24px, 0px)",
		},
		opacity: 1,
		transform: "translate(0px, 0px)",
	})

	return (
		<>
			<Helmet title="About" />

			{/* <SpringCustom>hello from page A</SpringCustom> */}
			<TransitionLink
				to="/"
				exit={{
					length: 1,
				}}
				entry={{
					delay: 0.6,
				}}
			>
				to page b!
			</TransitionLink>

			<Intro>
				An <Highlight>about</Highlight> page eh?
				<br />
			</Intro>
		</>
	)
}
