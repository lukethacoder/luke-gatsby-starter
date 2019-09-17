import * as React from "react"
// import Helmet from 'react-helmet'
import { useSpring, animated } from "react-spring"

// import "modern-normalize"
// import "../styles/normalize"

// import Footer from '../components/Footer'
import AppLayout from "../components/AppLayout"
import LayoutMain from "../components/AppLayout/LayoutMain"

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
		<AppLayout>
			{/* <Header /> */}
			<LayoutMain>{children}</LayoutMain>
			{/* <Footer /> */}
		</AppLayout>
	)
}

export default IndexLayout
