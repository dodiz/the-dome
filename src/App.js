import React, { useState } from "react"

import Background from "./components/background"
import Logo from "./components/logo"
import Pegi from "./components/splash/pegi"

import ArwesProvider from "./tools/arwesProvider"

import "./style.css"
import { Text } from "@arwes/core"

function App() {

  return (
    <ArwesProvider>
      < Background />
      <main className="main">

        <Logo />
        <Text className="brand__subtitle" as="div">A cyberpunk play by chat</Text>
        <Pegi />
      </main>
    </ArwesProvider>
  )
}

export default App
