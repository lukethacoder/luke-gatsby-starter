/* eslint-disable */
import React, { ReactNode, FunctionComponent } from "react"

interface ILinkProps {
	children?: ReactNode
	[key: string]: any
}

export const Link: FunctionComponent<ILinkProps> = ({ children, ...props }) => {
	let Component
	let isNext = false

	try {
		/* eslint-disable */
		Component = require("next/link")
		isNext = true
	} catch (e) {
		// noop
	}

	if (!Component && !isNext) {
		// console.log("is no component yet (try gatsby)")
		try {
			/* eslint-disable */
			Component = require("gatsby").Link
			// console.warn(<Component />)
			// console.warn("is gatsbyjs")
		} catch (e) {
			// noop
		}
	}

	if (!Component && !isNext) {
		try {
			/* eslint-disable */
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
