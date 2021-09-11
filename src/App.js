import React, { useState } from "react"
import { Button, Text } from "@arwes/core"
import { toast, ToastContainer, Slide } from "react-toastify"

import Background from "./components/background"
import Brand from "./components/brand"
import Pegi from "./components/splash/pegi"
import Assemble from "./components/splash/assemble"
import SplashMenu from "./components/splash/menu"

import ArwesProvider from "./tools/arwesProvider"

import "react-toastify/dist/ReactToastify.css"
import "./style.css"

function App() {
  const [assemble, setAssemble] = useState( false )

  return (
    <ArwesProvider>
      <ToastContainer
        theme="dark"
        draggablePercent={40}
        limit={4}
        transition={Slide}
      />
      {assemble ? (
        <React.Fragment>
          <Background />
          <main className="main">
            <Brand />
            <SplashMenu />
            <Pegi />
          </main>
        </React.Fragment>
      ) : (
        <Assemble onAssemble={() => setAssemble( true )} />
      )}
    </ArwesProvider>
  )
}

export default App
