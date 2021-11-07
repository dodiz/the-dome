import React from "react"
import { SoundProvider, ThemeProvider, AnimatorProvider } from "./arwes"

const ArwesProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<SoundProvider>
				<AnimatorProvider>{children}</AnimatorProvider>
			</SoundProvider>
		</ThemeProvider>
	)
}

export default ArwesProvider
