import React from "react"
import styled from "@emotion/styled"
import { colors } from "../../styles/variables"

interface IHighlightProps {
	children: string
}

export const Highlight = ({ children }: IHighlightProps) => {
	const renderWords = () => {
		const words = children.split(" ")
		const { length } = words

		return words.map((word, index) => (
			<StyledHighlight key={word}>
				<span>{word}</span>
				<span />
			</StyledHighlight>
		))
	}

	return <>{renderWords()}</>
}

const StyledHighlight = styled.span`
	position: relative;
	overflow: visible;
	z-index: 1;
	&:after {
		content: "";
		position: absolute;
		height: 2px;
		width: 100%;
		left: 0;
		bottom: 3px;
		overflow: visible;
		background-color: ${colors.brand.primary};
		z-index: -1;
	}
`
