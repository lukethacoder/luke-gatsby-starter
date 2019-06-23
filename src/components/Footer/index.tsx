import * as React from "react"
import styled from "@emotion/styled"

import { Container } from "../Container"
import { widths, colors } from "../../styles/variables"

interface ISocial {
	icon: React.ReactNode
	to: string
}

interface IFooterProps {
	logo: React.ReactNode
	social: ISocial[]
}

export const Footer = ({ logo, social }: IFooterProps) => (
	<StyledFooter>
		<Container>
			<div className="fooer__wrapper">
				<a
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

const StyledFooter = styled.footer`
	max-width: ${widths.lg};
	margin: 0 auto;
	bottom: 0;
	position: absolute;
	width: 100%;
	.fooer__wrapper {
		display: flex;
		justify-content: space-between;
		ul {
			display: flex;
			list-style: none;
			padding: 0;
			li {
				margin-left: 24px;
				a {
					color: ${colors.grey.base};
					&:hover {
						color: ${colors.brand.primary};
					}
				}
			}
		}
	}
`
