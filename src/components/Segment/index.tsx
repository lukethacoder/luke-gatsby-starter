import * as React from "react"

import { Container } from "../Container"

interface ISegmentProps {
	children: React.ReactNode
	container?: boolean
}

export const Segment = (props: ISegmentProps) => {
	const { children, container } = props
	const content = container ? <Container>{children}</Container> : children

	return <section>{content}</section>
}

Segment.defaultProps = {
	container: true,
}
