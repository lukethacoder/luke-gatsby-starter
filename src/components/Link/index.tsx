import * as React from "react"

interface ILinkProps {
	children?: React.ReactNode
	[key: string]: any
}

export const Link = ({ children, ...props }: ILinkProps) => {
	let Component
	let isNext = false

	try {
		Component = require("next/link")
		isNext = true
	} catch (e) {
		// noop
	}

	if (!Component && !isNext) {
		console.log("is no component yet (try gatsby)")
		try {
			Component = require("gatsby").Link
			console.warn(<Component />)
			console.warn("is gatsbyjs")
		} catch (e) {
			// noop
		}
	}

	if (!Component && !isNext) {
		try {
			Component = require("react-router-dom").Link
		} catch (e) {
			// noop
		}
	}

	if (isNext) {
		return <Component>{children}</Component>
	}

	return <Component {...props}>{children}</Component>
}
