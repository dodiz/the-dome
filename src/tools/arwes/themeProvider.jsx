import React from "react"
import { createTheme } from "@arwes/design"
import { ArwesThemeProvider } from "@arwes/core"

const theme = createTheme({
	palette: {
		// Default theme palette basic colors.
		tonalOffset: 0.1,
		primary: { main: "var(--color-secondary)" },
		secondary: { main: "var(--color-accent)" },
		success: { main: "var(--color-success" },
		error: { main: "var(--color-error)" },

		// Default theme palette elevation colors.
		elevationOffset: 0.025,
		neutral: { main: "#000" }
	}
})

const Themeprovider = ({ children }) => {
	return <ArwesThemeProvider theme={theme}>{children}</ArwesThemeProvider>
}

export default Themeprovider
