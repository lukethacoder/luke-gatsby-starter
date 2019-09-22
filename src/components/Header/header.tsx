import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link as HeaderLink } from "./link"
import { Link } from "../link"
import StarterLogo from "../../assets/svg/luke-logo.svg"
import { HeaderContainer, HeaderMenu } from "./style"

export const Header = () => (
	<HeaderContainer>
		<nav className="header__wrapper">
			<Link to="/">
				<div className="logo">
					<StarterLogo />
				</div>
			</Link>

			<HeaderMenu>
				<HeaderLink name="about" to="/about" />

				<HeaderLink
					name="github"
					to="https://github.com/lukethacoder/gatsby-starter-luke"
					icon={<FontAwesomeIcon icon={["fab", "github"]} />}
				/>
			</HeaderMenu>
		</nav>
	</HeaderContainer>
)
