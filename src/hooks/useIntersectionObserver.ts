import { useState, useEffect, RefObject, ReactFragment } from "react"

interface IuseIntersectionObserver {
	threshold?: number
	root?: any
	rootMargin?: string
}

export const useIntersectionObserver = (
	ref: RefObject<HTMLElement | Element | ReactFragment> | null | undefined,
	{ threshold, root, rootMargin }: IuseIntersectionObserver
) => {
	// configure the state
	const [state, setState] = useState<{
		inView: boolean
		triggered: boolean
		entry: unknown
	}>({
		inView: false,
		triggered: false,
		entry: undefined,
	})

	const observer =
		typeof window !== `undefined`
			? new IntersectionObserver(
					(entries, observerInstance) => {
						// checks to see if the element is intersecting
						if (entries[0].intersectionRatio > 0) {
							// if it is update the state, we set triggered as to not re-observe the element
							setState({
								inView: true,
								triggered: true,
								entry: observerInstance,
							})
							// unobserve the element
							// if (ref instanceof Element) {
							// 	let observerRef: Element = ref
							// 	observerInstance.unobserve(observerRef.current)
							// }
							observerInstance.unobserve(ref.current)
						}
						return
					},
					{
						threshold: threshold || 0,
						root: root || null,
						rootMargin: rootMargin || "0%",
					}
			  )
			: null

	useEffect(() => {
		// check that the element exists, and has not already been triggered
		// if (ref instanceof Element) {
		// 	let observerRef: Element = ref

		// 	if (observerRef.current && !state.triggered) {
		// 		observer.observe(observerRef.current)
		// 	}
		// }
		if (typeof window !== `undefined`) {
			if (ref.current && !state.triggered) {
				observer.observe(ref.current)
			}
		}
	})

	return [state.inView, state.entry]
}
