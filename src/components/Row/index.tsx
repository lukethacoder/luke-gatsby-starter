import React, { ReactNode } from "react"

interface IRowProps {
	children: ReactNode
}

export const Row = ({ children }: IRowProps) => <div>{children}</div>
