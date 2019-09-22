import React, { SFC, ReactNode } from "react"
import styled from "@emotion/styled"

export const LayoutMain = ({ children }: any) => <div>{children}</div>

const StyledLayoutMain = styled.section`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 100vh;
`
