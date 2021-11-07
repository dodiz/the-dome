import React from "react"
import { ArwesThemeProvider } from "@arwes/core"

const Themeprovider = ({ children }) => {
	return <ArwesThemeProvider>{children}</ArwesThemeProvider>
}

export default Themeprovider
