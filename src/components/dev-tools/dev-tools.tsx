import React, { useEffect } from "react"

import { useKeyDown } from "../../hooks/useKeyDown"
import { useLocalStorage } from "../../hooks/useLocalStorage"

import { GridOverlay } from "./grid-overlay"

import { StyledDevTools } from "./style"

const LOCAL_STORAGE_KEY_VISIBLE = "_lukeDevtoolsVisible"

export const Devtools = () => {
	const [isVisible, setVisible] = useLocalStorage(
		LOCAL_STORAGE_KEY_VISIBLE,
		false
	)
	const keys = useKeyDown()

	useEffect(() => {
		// ctrl + ,
		if (keys.includes(17) && keys.includes(188)) {
			console.log("hit keys")
			setVisible(!isVisible)
		}
	}, [keys])

	console.log("isVisible", isVisible)

	return (
		<StyledDevTools className={isVisible ? "visible" : ""}>
			<GridOverlay button={isVisible} columns={12} />
		</StyledDevTools>
	)
}
