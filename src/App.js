import React, { useState } from "react"
import { Button, Text } from "@arwes/core"
import { toast, ToastContainer, Slide } from "react-toastify"

import Pegi from "./components/splash/pegi"
import Background from "./components/background"
import Brand from "./components/brand"
import Assemble from "./components/assemble"

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
            <Button
              palette="secondary"
              onClick={() => toast.error( "This function is not yet available" )}
              style={{
                width: "200px",
                fontSize: "2rem",
                margin: "0 auto 3rem auto"
              }}
              animator={{ duration: { delay: 3000 } }}>
              <Text>Explore</Text>
            </Button>
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
