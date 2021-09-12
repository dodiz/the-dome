import React from "react"
import { createTheme } from "@arwes/design"
import { ArwesThemeProvider } from "@arwes/core"

const theme = createTheme({})

const Themeprovider = ({ children }) => {
	return <ArwesThemeProvider theme={theme}>{children}</ArwesThemeProvider>
}

export default Themeprovider
