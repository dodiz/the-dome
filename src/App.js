import React from "react"

import Pegi from "./components/splash/pegi"
import Background from "./components/background"
import Brand from "./components/brand"

import ArwesProvider from "./tools/arwesProvider"

import "./style.css"

function App() {

  return (
    <ArwesProvider>
      < Background />
      <main className="main">
        <Brand />
        <Pegi />
      </main>
    </ArwesProvider>
  )
}

export default App
