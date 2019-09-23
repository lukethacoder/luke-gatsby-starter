import React, { FunctionComponent } from "react"
import { useSpring, animated, config } from "react-spring"

export const AnimateFadeUp: FunctionComponent = ({ children }) => {
	const fade = useSpring({
		config: config.slow,
		from: {
			opacity: 0,
			transform: "translate(0px, 24px)",
		},
		opacity: 1,
		transform: "translate(0px, 0px)",
	})

	return <animated.div style={fade}>{children}</animated.div>
}
