import React from "react"
import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"

const basicStyle = {
	body: {
		background: "none"
	}
}

const Themeprovider = ({ children }) => {
	return (
		<ArwesThemeProvider>
			<StylesBaseline styles={basicStyle} />
			{children}
		</ArwesThemeProvider>
	)
}

export default Themeprovider
