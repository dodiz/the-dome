import React from "react"
import { createTheme } from "@arwes/design"
import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"

const theme = createTheme({
	palette: {
		// Default theme palette basic colors.
		tonalOffset: 0.1,
		primary: { main: "#f00" },
		secondary: { main: "#ff0" },
		success: { main: "#0f0" },
		error: { main: "#f00" },

		// Default theme palette elevation colors.
		elevationOffset: 0.025,
		neutral: { main: "#000" }
	}
})

const Themeprovider = ({ children }) => {
	return <ArwesThemeProvider theme={theme}>{children}</ArwesThemeProvider>
}

export default Themeprovider
