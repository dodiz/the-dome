import React, { useState } from "react"
import { Switch, Route } from "react-router"
import { ToastContainer, Slide } from "react-toastify"

import Background from "./components/background"
import Assemble from "./components/splash/assemble"
import SplashPage from "./components/splashPage"
import InfoPage from "./components/infoPage"
import LoginForm from "./components/loginForm"
import RegisterForm from "./components/registerForm"
import PrivacyPage from "./components/privacyPage"
import Land from "./components/land"

import ArwesProvider from "./tools/arwesProvider"

import "react-toastify/dist/ReactToastify.css"
import "./css/global.css"

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
          <Switch>
            <Route path="/info" component={InfoPage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/land" component={Land} />
            <Route exact path="/" component={SplashPage} />
          </Switch>
        </React.Fragment>
      ) : (
        <Assemble onAssemble={() => setAssemble( true )} />
      )}
    </ArwesProvider>
  )
}

export default App
