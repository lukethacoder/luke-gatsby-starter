import React, { ReactNode, cloneElement } from "react"

import { Link as InternalLink } from "../link"

interface ILinkProps {
	name: string
	to: string
	icon?: ReactNode
}

export const Link = ({ name, to, icon }: ILinkProps) => {
	const isLink = typeof to !== "undefined"
	console.log("isLink => ", isLink)
	const isExternal =
		isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || "")

	const content = () => (
		<>
			{icon && cloneElement(icon as any, { className: "none" })}
			{name}
		</>
	)

	if (!isExternal) {
		return <InternalLink to={to}>{content()}</InternalLink>
	}

	return (
		<a target="_blank" rel="noopener noreferrer" href={to}>
			{console.log("to to => => => ", to)}
			{to}
			{content()}
		</a>
	)
}
