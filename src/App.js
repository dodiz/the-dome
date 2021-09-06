import React from "react"

import Background from "./components/background"
import Logo from "./components/logo"
import SplashMenu from "./components/splashMenu"
import Pegi from "./components/splash/pegi"

import ArwesProvider from "./tools/arwesProvider"

import "./style.css"

function App() {

  return (
    <ArwesProvider>
      <Background />
      <main className="main">
        <Logo />
        test
        <Pegi />
      </main>
    </ArwesProvider>
  )
}

export default App
