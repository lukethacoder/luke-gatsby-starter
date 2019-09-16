import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link as HeaderLink } from "./Link"
import StarterLogo from "../../assets/svg/luke-logo.svg"
import { HeaderContainer, HeaderMenu } from "./style"

export const Header = () => (
	<HeaderContainer>
		<nav className="header__wrapper">
			<HeaderLink name="home" to="/">
				<div className="logo">
					<StarterLogo />
				</div>
			</HeaderLink>

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
