import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { widths, breakpoints } from "../../styles/variables"
import { rem } from "../../styles/mixins"

// IntrinsicAttributes
interface IColumns {
	children?: ReactNode
	cols?: number
	isResponsive?: boolean
	noPadding?: boolean
	levelsDeep?: number // push grid down children levels
}
export const Columns: FunctionComponent = ({
	children,
	...props
}: IColumns) => <StyledColumns {...props}>{children}</StyledColumns>

// set how deep the grid needs to apply to
function setGridDepth(howManyDeep: number) {
	let styles = ""
	for (let i = 1; i <= howManyDeep; i++) {
		styles += ` > * `
	}

	return `${styles}`
}

const StyledColumns = styled("section")<IColumns>`
	${(props) =>
		props.levelsDeep && props.levelsDeep >= 1
			? `
			${setGridDepth(props.levelsDeep)} {
			max-width: ${widths.lg}px;
			display: grid;
			grid-gap: 12px;
			grid-template-columns: repeat(
				${props.isResponsive ? 1 : props.cols},
				1fr
			);
			width: 100%;
			margin: 0 auto;
			padding: ${props.noPadding ? 0 : "0 16px"};

			@media (min-width: ${rem(breakpoints.sm)}em) {
				grid-template-columns: repeat(
					${props.isResponsive ? 2 : props.cols},
					1fr
				);
			}
			@media (min-width: ${rem(breakpoints.md)}em) {
				grid-template-columns: repeat(
					${
						props.cols && props.cols > 3
							? props.isResponsive
								? 3
								: props.cols
							: props.cols
					},
					1fr
				);
			}
			@media (min-width: ${rem(breakpoints.lg)}em) {
				grid-template-columns: repeat(${props.cols}, 1fr);
			}
		}
	`
			: `
		max-width: ${widths.lg}px;
		display: grid;
		grid-gap: 12px;
		grid-template-columns: repeat(
			${props.isResponsive ? 1 : props.cols},
			1fr
		);
		width: 100%;
		margin: 0 auto;
		padding: ${props.noPadding ? 0 : "0 16px"};

		@media (min-width: ${rem(breakpoints.sm)}em) {
			grid-template-columns: repeat(
				${props.isResponsive ? 2 : props.cols},
				1fr
			);
		}
		@media (min-width: ${rem(breakpoints.md)}em) {
			grid-template-columns: repeat(
				${
					props.cols && props.cols > 3
						? props.isResponsive
							? 3
							: props.cols
						: props.cols
				},
				1fr
			);
		}
		@media (min-width: ${rem(breakpoints.lg)}em) {
			grid-template-columns: repeat(${props.cols}, 1fr);
		}
	`}
`
