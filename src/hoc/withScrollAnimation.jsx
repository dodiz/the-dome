import React from "react"
import handleViewport from "react-in-viewport"
import { useEffect } from "react/cjs/react.development"

function withScrollAnimation(Component) {
	const ScrollComponent = handleViewport(Component)
	return props => {
		const _props = { ...props }
		delete _props.children
		return <ScrollComponent {..._props}>{props.children}</ScrollComponent>
	}
}

export default withScrollAnimation
