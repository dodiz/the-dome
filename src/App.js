import React, { useState } from "react"
import { Switch, Route } from "react-router"
import { ToastContainer, Slide, toast } from "react-toastify"
import Assemble from "./components/splash/assemble"
import SplashPage from "./components/splashPage"
import Land from "./components/land"

import ArwesProvider from "./tools/arwesProvider"

import "react-toastify/dist/ReactToastify.css"
import "./index.css"

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
        <Switch>
          <Route path="/land" component={Land} />
          <Route path="/" component={SplashPage} />
        </Switch>
      ) : (
        <Assemble onAssemble={() => setAssemble( true )} />
      )}
    </ArwesProvider>
  )
}

export default App
