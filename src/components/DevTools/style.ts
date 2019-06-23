import styled from "@emotion/styled"
import { colors } from "../../styles/variables"

export const StyledDevTools = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${colors.brand.primary};
	opacity: 0;
	z-index: -1;
	transition: all 0.3s ease;
	&.visible {
		opacity: 0.8;
		z-index: 1;
		transition: all 0.3s ease;
	}
`
