import React, { ReactNode } from "react"

import { Container } from "../container"

interface ISegmentProps {
	children: ReactNode
	container?: boolean
}

export const Segment = (props: ISegmentProps) => {
	const { children, container } = props
	const content = container ? <Container>{children}</Container> : children

	return <section>{content}</section>
}
