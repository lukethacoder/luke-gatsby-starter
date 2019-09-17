import * as React from "react"

import AppLayout from "../components/AppLayout"
import LayoutMain from "../components/AppLayout/LayoutMain"

const IndexLayout: React.SFC = ({ children }) => {
	return (
		<AppLayout>
			<LayoutMain>{children}</LayoutMain>
		</AppLayout>
	)
}

export default IndexLayout
