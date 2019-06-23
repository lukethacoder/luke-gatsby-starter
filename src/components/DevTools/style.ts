import styled from "@emotion/styled"

export const StyledDevTools = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: peru;
	opacity: 0;
	z-index: -1;
	transition: all 0.3s ease;
	&.visible {
		opacity: 0.8;
		z-index: 1;
		transition: all 0.3s ease;
	}
`
