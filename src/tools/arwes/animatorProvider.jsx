import React from "react"
import { AnimatorGeneralProvider } from "@arwes/animation"

const animatorGeneral = { duration: { enter: 200, exit: 200 } }

const AnimatorProvider = ({ children }) => {
	return (
		<AnimatorGeneralProvider animator={animatorGeneral}>
			{children}
		</AnimatorGeneralProvider>
	)
}

export default AnimatorProvider
