import React, { useState } from "react"
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from "react-router"
import { ToastContainer, Slide } from "react-toastify"

import "./fire"

import Assemble from "./components/splash-assemble"
import SplashPage from "./components/splash"
import Land from "./components/land"

import ArwesProvider from "./context/arwesProvider"
import AuthProvider from "./context/authContext"

import "react-toastify/dist/ReactToastify.css"
import "./css/modal.css"
import "./css/index.css"
import "animate.css"

function App() {
  const [assemble, setAssemble] = useState( false )

  return (
    <BrowserRouter>
      <ArwesProvider>
        <ToastContainer
          theme="dark"
          draggablePercent={40}
          limit={4}
          transition={Slide}
        />
        <AuthProvider>
          {assemble ? (
            <Switch>
              <Route path="/land" component={Land} />
              <Route path="/" component={SplashPage} />
            </Switch>
          ) : (
            <Assemble onAssemble={() => setAssemble( true )} />
          )}
        </AuthProvider>
      </ArwesProvider>
    </BrowserRouter>
  )
}

export default App
