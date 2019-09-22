import React, { SFC, ReactNode } from "react"
import { AppLayout } from "../components/app-layout"

const IndexLayout: SFC = ({ children }: ReactNode) => {
	return <AppLayout>{children}</AppLayout>
}

export default IndexLayout
