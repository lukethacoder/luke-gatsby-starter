import React, { useRef, useEffect, FunctionComponent, Fragment } from "react"
import { useSpring, useTrail, animated, config } from "react-spring"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

/*
	useSpring
*/
export const SpringFadeUp: FunctionComponent = ({ children }) => {
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
		config: config.slow,
		from: {
			opacity: 0,
			transform: "translate(0px, 24px)",
		},
		opacity: inView ? 1 : 0,
		transform: inView ? "translate(0px, 0px)" : "translate(0px, 24px)",
	})

	return (
		<div ref={elementRef}>
			<animated.div style={fade}>{children}</animated.div>
		</div>
	)
}

/*
	useTrail
*/
export const TrailFadeUp: FunctionComponent = ({ children }) => {
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

	const trail = useTrail(children ? children.length : 3, {
		from: {
			opacity: 0,
			transform: "translate(0px, 24px)",
		},
		opacity: 1,
		transform: "translate(0px, 0px)",
	})

	return (
		<Fragment ref={elementRef}>
			{trail.map((props, key) => (
				<animated.div style={props}>
					{children && children[key]}
				</animated.div>
			))}
		</Fragment>
	)
	// <animated.div style={fade}>{children}</animated.div>
}
