import * as React from "react"

import { Link } from "../Link"

import StarterLogo from "../../assets/svg/luke-logo.svg"
import { HeaderContainer, HeaderMenu } from "./style"

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
