import * as React from "react"

interface IRowProps {
	children: React.ReactNode
}

export const Row = ({ children }: IRowProps) => <div>{children}</div>
