import React from "react"
import styled from "@emotion/styled"

import { Highlight } from "../components/intro/highlight"
import { SpringFadeUp, TrailFadeUp } from "../utils/animations"
import { Container } from "../components/container"
import { Columns } from "../components/columns"
import { Canberra } from "../components/canberra"
import { Banner } from "../components/banner"
import { colors, breakpoints } from "../styles/variables"
import { rem } from "../styles/mixins"

export default () => (
	<>
		<Canberra title="Animations" />

		<Banner>
			<h2>
				<Highlight>react-spring</Highlight> Animations
			</h2>
		</Banner>

		<Container>
			<TrailSectionContainer>
				<Columns {...{ cols: 2, isResponsive: true, noPadding: true }}>
					<Columns {...{ cols: 1, noPadding: true }}>
						<h3>TrailFadeUp</h3>
						<TrailContainer>
							<TrailFadeUp>
								<TrailItem>trail item one</TrailItem>
								<TrailItem>trail item two</TrailItem>
								<TrailItem>trail item three</TrailItem>
								<TrailItem>trail item four</TrailItem>
								<TrailItem>trail item five</TrailItem>
								<TrailItem>trail item six</TrailItem>
							</TrailFadeUp>
						</TrailContainer>
					</Columns>
				</Columns>
			</TrailSectionContainer>
		</Container>
	</>
)

const TrailItem = styled.div`
	background-color: ${colors.brand.primary};
	color: ${colors.white};
	border: 1px solid ${colors.brand.primary};
	border-radius: 2px;
	padding: 12px;
	/* margin-bottom: 8px; */
`
const TrailSectionContainer = styled.div`
	padding: 14vh 0;
`
const TrailContainer = styled.div`
	overflow: hidden;
	> * {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 12px;
		@media (min-width: ${rem(breakpoints.sm)}em) {
			grid-template-columns: 1fr 1fr;
		}
	}
`
