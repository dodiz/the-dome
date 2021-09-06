import React from "react"

import Logo from "./components/logo"
import SplashMenu from "./components/splashMenu"
import ArwesProvider from "./tools/arwesProvider"
import Pegi from "./components/splash/pegi"

import "./style.css"

function App() {

  return (
    <ArwesProvider>
      <Logo />
      <Pegi />
    </ArwesProvider>
  )
}

export default App
