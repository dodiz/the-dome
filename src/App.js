import React, { useState } from "react"
import { ToastContainer, Slide } from "react-toastify"

import Background from "./components/background"
import Assemble from "./components/splash/assemble"
import SplashPage from "./components/splashPage"

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
          <SplashPage />
        </React.Fragment>
      ) : (
        <Assemble onAssemble={() => setAssemble( true )} />
      )}
    </ArwesProvider>
  )
}

export default App
