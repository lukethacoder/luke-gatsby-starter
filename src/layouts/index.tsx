import React, { FunctionComponent } from "react"
import { AppLayout } from "../components/app-layout"

export const IndexLayout: FunctionComponent = ({ children }) => (
	<AppLayout>{children}</AppLayout>
)
