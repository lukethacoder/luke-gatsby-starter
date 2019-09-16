import * as React from "react"
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import { useSpring, animated } from "react-spring"

import "modern-normalize"
import "../styles/normalize"

// import Footer from '../components/Footer'
import AppLayout from "../components/AppLayout"
import LayoutMain from "../components/AppLayout/LayoutMain"

type StaticQueryProps = {
	site: {
		siteMetadata: {
			title: string
			description: string
		}
	}
}

const IndexLayout: React.SFC = ({ children }) => {
	const fade = useSpring({
		from: {
			opacity: 0,
			transform: "translate(24px, 0px)",
		},
		opacity: 1,
		transform: "translate(0px, 0px)",
	})

	return (
		<StaticQuery
			query={graphql`
				query IndexLayoutQuery {
					site {
						siteMetadata {
							title
							description
						}
					}
				}
			`}
			render={(data: StaticQueryProps) => (
				<AppLayout>
					{/* <Header /> */}
					<LayoutMain>
						<animated.div style={fade}>{children}</animated.div>
					</LayoutMain>
					{/* <Footer /> */}
				</AppLayout>
			)}
		/>
	)
}

export default IndexLayout
