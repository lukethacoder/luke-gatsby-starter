import styled from "@emotion/styled"

import { widths, colors } from "../../styles/variables"

export const StyledFooter = styled.footer`
	max-width: ${widths.lg};
	margin: 0 auto;
	bottom: 0;
	position: absolute;
	width: 100%;
	padding: 24px 0;
	.footer__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.footer__logo {
			max-width: 48px;
			max-height: 16px;
			height: 100%;
			width: 100%;
		}
		ul {
			display: flex;
			list-style: none;
			padding: 0;
			margin: 0;
			li {
				margin: 0 0 0 24px;
				a {
					color: ${colors.grey.base};
					height: 100%;
					&:hover {
						color: ${colors.brand.primary};
					}
				}
			}
		}
	}
`
