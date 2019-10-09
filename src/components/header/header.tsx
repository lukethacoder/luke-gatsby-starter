import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
				<Link name="animations" to="/animations">
					animations
				</Link>
				<Link name="about" to="/about">
					about
				</Link>

				<Link
					name="github"
					to="https://github.com/lukethacoder/luke-gatsby-starter"
				>
					<FontAwesomeIcon icon={["fab", "github"]} />
					Github
				</Link>
			</HeaderMenu>
		</nav>
	</HeaderContainer>
)
