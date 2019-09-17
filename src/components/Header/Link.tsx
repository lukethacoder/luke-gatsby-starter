import * as React from "react"

import { Link as InternalLink } from "../Link"

interface ILinkProps {
	name: string
	to: string
	icon?: React.ReactNode
}

export const Link = ({ name, to, icon }: ILinkProps) => {
	const isLink = typeof to !== "undefined"
	const isExternal =
		isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || "")

	const content = () => (
		<>
			{icon && React.cloneElement(icon as any, { className: "none" })}
			{name}
		</>
	)

	if (isExternal) {
		return (
			<a target="_blank" rel="noopener noreferrer" href={to}>
				{content()}
			</a>
		)
	}

	return (
		<InternalLink
			to={to}
			exit={{
				length: 1,
			}}
			entry={{
				delay: 0.6,
			}}
		>
			{content()}
		</InternalLink>
	)
}
