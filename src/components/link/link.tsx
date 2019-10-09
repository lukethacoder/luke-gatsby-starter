import React, { ReactNode, cloneElement } from "react"
import { Link as GatsbyLink } from "gatsby"

interface ILinkProps {
	children?: ReactNode | any
	name: string
	to: string
	icon?: ReactNode
}

export const Link = ({ children, name, to }: ILinkProps) => {
	const isLink = typeof to !== "undefined"
	const isExternal =
		isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || "")

	const content = () => <>{children && children}</>

	if (!isExternal) {
		return (
			<GatsbyLink key={name} to={to}>
				{content()}
			</GatsbyLink>
		)
	}

	return (
		<a target="_blank" key={name} rel="noopener noreferrer" href={to}>
			{content()}
		</a>
	)
}
