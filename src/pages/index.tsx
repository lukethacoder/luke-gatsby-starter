import React, { useRef, useEffect } from "react"
import Helmet from "react-helmet"
import { useSpring, animated, config } from "react-spring"

import { Intro } from "../components/Intro"
import { Highlight } from "../components/Intro/Highlight"
import { BlockText } from "../components/BlockText"
import { AnimateFadeUp } from "../animations"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

export default () => {
	// Create the ref to our element
	const elementRef = useRef<HTMLDivElement | Element>(null)
	const [inView, entry] = useIntersectionObserver(elementRef, {
		threshold: 0,
	})

	// console.log our state everytime its updated to see if it works.
	useEffect(() => {
		console.log(inView)
	}, [inView])

	const fade = useSpring({
		config: config.slow,
		from: {
			opacity: 0,
			transform: "translate(0px, 24px)",
		},
		opacity: inView ? 1 : 0,
		transform: "translate(0px, 0px)",
	})

	return (
		<>
			<Helmet title="Home" />

			<Intro>
				<AnimateFadeUp>
					Opinionated starter using: <Highlight>TypeScript</Highlight>
					,&nbsp;
					<Highlight>styled-components</Highlight>,{" "}
					<Highlight>React Spring</Highlight>, &{" "}
					<Highlight>React Hooks</Highlight>.
				</AnimateFadeUp>
			</Intro>

			<div ref={elementRef}>
				<animated.div style={fade}>
					<BlockText
						heading="Documentation"
						description={
							<>
								Documentation for this GatsbyJS starter can be
								found{" "}
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
				</animated.div>
			</div>
			{/* 
			<AnimateFadeUp>
				<img
					style={{ height: "240px" }}
					src="https://source.unsplash.com/collection/7503176/1600x900"
				/>
			</AnimateFadeUp> */}
		</>
	)
}
