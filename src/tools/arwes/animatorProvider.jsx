import React from "react"
import { AnimatorGeneralProvider } from "@arwes/animation"

const animatorGeneral = { duration: { enter: 400, exit: 300 } }

const AnimatorProvider = ({ children }) => {
	return (
		<AnimatorGeneralProvider animator={animatorGeneral}>
			{children}
		</AnimatorGeneralProvider>
	)
}

export default AnimatorProvider
