import { Animator } from "@arwes/animation"
import React from "react"
import handleViewport from "react-in-viewport"

function withScrollAnimation(Component) {
	const ScrollComponent = handleViewport(Component)
	return props => {
		return <ScrollComponent {...props}>{props.children}</ScrollComponent>
	}
}

export default withScrollAnimation
