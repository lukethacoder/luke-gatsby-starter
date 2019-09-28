import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { widths, breakpoints } from "../../styles/variables"
import { rem } from "../../styles/mixins"

export const Columns: FunctionComponent<IColumns> = ({
	children,
	cols,
	isResponsive,
}) => (
	<StyledColumns cols={cols} isResponsive={isResponsive}>
		{children}
	</StyledColumns>
)

const StyledColumns = styled.section`
	max-width: ${widths.lg}px;
	display: grid;
	grid-template-columns: repeat(
		${(props) => (props.isResponsive ? 1 : props.cols)},
		1fr
	);
	width: 100%;
	margin: 0 auto;
	padding: 0 16px;

	@media (min-width: ${rem(breakpoints.sm)}em) {
		grid-template-columns: repeat(
			${(props) => (props.isResponsive ? 2 : props.cols)},
			1fr
		);
	}
	@media (min-width: ${rem(breakpoints.md)}em) {
		grid-template-columns: repeat(
			${(props) =>
				props.cols > 3
					? props.isResponsive
						? 3
						: props.cols
					: props.cols},
			1fr
		);
	}
	@media (min-width: ${rem(breakpoints.lg)}em) {
		grid-template-columns: repeat(${(props) => props.cols}, 1fr);
	}
`

interface IColumns {
	children?: ReactNode
	cols: number
	isResponsive?: boolean
}
