import React, { useRef, useEffect } from "react"
import Helmet from "react-helmet"
import { useSpring, animated, config } from "react-spring"

import { Intro } from "../components/intro"
import { Highlight } from "../components/intro/highlight"
import { AnimateFadeUp } from "../animations"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

export default () => {
	// Create the ref to our element
	const elementRef = useRef<HTMLDivElement | Element>(null)
	const [inView, entry] = useIntersectionObserver(elementRef, {
		threshold: 1,
	})

	// console.log our state everytime its updated to see if it works.
	useEffect(() => {
		console.log("inView => ", inView)
		console.log("entry => ", entry)
	}, [inView])

	const fade = useSpring({
		config: config.gentle,
		from: {
			opacity: 0,
			transform: "translate(0px, 24px)",
		},
		opacity: inView ? 1 : 0,
		transform: inView ? "translate(0px, 0px)" : "translate(0px, 24px)",
	})

	return (
		<>
			<Helmet title="Home" />

			<Intro>
				<AnimateFadeUp>
					<>
						Opinionated starter using:{" "}
						<Highlight>TypeScript</Highlight>
						,&nbsp;
						<Highlight>styled-components</Highlight>,{" "}
						<Highlight>React Spring</Highlight>, &{" "}
						<Highlight>React Hooks</Highlight>.
					</>
				</AnimateFadeUp>
			</Intro>

			<div ref={elementRef}>
				<animated.div style={fade}>
					<p>
						Documentation for this GatsbyJS starter can be found
						<a
							href="https://github.com/lukethacoder/gatsby-starter-luke"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
						.
					</p>
				</animated.div>
			</div>
		</>
	)
}
