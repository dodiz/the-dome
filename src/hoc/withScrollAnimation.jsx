import React, { useRef } from "react"
import { useInViewport } from "react-in-viewport"
import { Animator } from "@arwes/animation"

function WithScrollAnimation({ children }) {
	const myRef = useRef()
	const { enterCount } = useInViewport(myRef, {}, {}, {})
	return (
		<section ref={myRef}>
			<Animator animator={{ activate: enterCount > 0 }}>{children}</Animator>
		</section>
	)
}

function withScrollAnimation(Component) {
	return props => (
		<WithScrollAnimation>
			<Component />
		</WithScrollAnimation>
	)
}

export default withScrollAnimation
