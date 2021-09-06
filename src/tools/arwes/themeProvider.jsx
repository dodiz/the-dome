import React from "react"
import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"

const Themeprovider = ({ children }) => {
	return <ArwesThemeProvider>{children}</ArwesThemeProvider>
}

export default Themeprovider
