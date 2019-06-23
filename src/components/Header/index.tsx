import * as React from "react"
import styled from "@emotion/styled"

import { Link } from "../Link"
import { widths, font_weight, colors } from "../../styles/variables"
import { rem } from "../../styles/mixins"

import StarterLogo from "../../assets/svg/luke-logo.svg"

interface IHeaderProps {
	children: React.ReactNode
}

export const Header = ({ children }: IHeaderProps) => (
	<HeaderContainer>
		<div>
			<div className="header__wrapper">
				<Link to="/" className="logo">
					<StarterLogo />
				</Link>

				<HeaderMenu>{children}</HeaderMenu>
			</div>
		</div>
	</HeaderContainer>
)

const HeaderContainer = styled.header`
	width: 100%;
	max-width: ${widths.lg}px;
	margin: 0 auto;
	padding: 36px 16px;
	.header__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		.logo {
			align-items: center;
			display: flex;
			height: 100%;
			svg {
				height: 100%;
				max-height: 48px;
				width: auto;
				min-height: 42px;
			}
		}
	}
`
const HeaderMenu = styled.div`
	display: flex;
	a {
		margin-left: 36px;
		display: flex;
		align-items: center;
		font-weight: ${font_weight.semi_bold};
		font-size: ${rem(16)}rem;
		color: ${colors.grey.base};
		&:hover {
			color: ${colors.brand.primary};
		}
		svg {
			margin-right: 6px;
		}
	}
`
