import React from "react"
import styled from "@emotion/styled"
import Helmet from "react-helmet"

import { Highlight } from "../components/intro/highlight"
import { SpringFadeUp, TrailFadeUp } from "../utils/animations"
import { Container } from "../components/container"
import { Columns } from "../components/columns"
import { Banner } from "../components/banner"
import { colors } from "../styles/variables"
import { CodeSnippet } from "../components/code-snippet/code-snippet"

export default () => (
	<>
		<Helmet title="React Spring Animations" />

		<Banner>
			<h2>
				<Highlight>react-spring</Highlight> Animations
			</h2>
		</Banner>
		<Container>
			<br />

			<Container>
				<Columns cols={2} isResponsive>
					<DescriptionCol>
						<h3>TrailFadeUp</h3>
						<div>
							<CodeSnippet language="javascript">
								{`<TrailFadeUp>
  <TrailItem>trail item one</TrailItem>
  <TrailItem>trail item two</TrailItem>
  <TrailItem>trail item three</TrailItem>
  <TrailItem>trail item four</TrailItem>
  <TrailItem>trail item five</TrailItem>
  <TrailItem>trail item six</TrailItem>
</TrailFadeUp>
`}
							</CodeSnippet>
						</div>
					</DescriptionCol>
					<DescriptionCol>
						<Columns cols={1}>
							<TrailFadeUp>
								<TrailItem>trail item one</TrailItem>
								<TrailItem>trail item two</TrailItem>
								<TrailItem>trail item three</TrailItem>
								<TrailItem>trail item four</TrailItem>
								<TrailItem>trail item five</TrailItem>
								<TrailItem>trail item six</TrailItem>
							</TrailFadeUp>
						</Columns>
					</DescriptionCol>
				</Columns>
			</Container>
		</Container>
	</>
)

const TrailItem = styled.div`
	background-color: ${colors.brand.primary};
	color: ${colors.white};
	border: 1px solid ${colors.brand.primary};
	border-radius: 2px;
	padding: 12px;
	margin-bottom: 8px;
`

const DescriptionCol = styled.div`
	padding: 42px;
	overflow: hidden;
`
