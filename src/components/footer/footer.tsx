import React, { ReactNode } from "react"

import { Container } from "../container"
import { StyledFooter } from "./style"

interface ISocial {
	icon: ReactNode
	to: string
}

interface IFooterProps {
	logo: ReactNode
	social: ISocial[]
}

export const Footer = ({ logo, social }: IFooterProps) => (
	<StyledFooter>
		<Container>
			<div className="footer__wrapper">
				<a
					className="footer__logo"
					href="https://lukesecomb.digital"
					target="_blank"
					rel="noopener noreferrer"
				>
					{logo}
				</a>
				<ul>
					{social.map((item) => (
						<li key={item.to}>
							<a
								href={item.to}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</Container>
	</StyledFooter>
)
