import React from "react"
import { AnimatorGeneralProvider } from "@arwes/animation"
import animatorConfig from "../../config/animation.json"

const AnimatorProvider = ({ children }) => {
	return (
		<AnimatorGeneralProvider animator={animatorConfig}>
			{children}
		</AnimatorGeneralProvider>
	)
}

export default AnimatorProvider
