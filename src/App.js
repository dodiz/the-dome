import React, { useState } from "react"
import { Button, Text } from "@arwes/core"
import { toast, ToastContainer } from "react-toastify"

import Pegi from "./components/splash/pegi"
import Background from "./components/background"
import Brand from "./components/brand"
import Assemble from "./components/assemble"

import ArwesProvider from "./tools/arwesProvider"

import "./style.css"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [assemble, setAssemble] = useState( false )


  return (
    <ArwesProvider>
      <ToastContainer />
      {assemble
        ? <>
          < Background />
          <main className="main">
            <Brand />
            <Button onClick={() => toast.error( "This function is not available yet" )} style={{ width: "200px", fontSize: "2rem", margin: "0 auto 3rem auto" }} animator={{ duration: { delay: 5000 } }}><Text>Explore</Text></Button>
            <Pegi />
          </main>
        </>
        : <Assemble onAssemble={() => setAssemble( true )} />
      }
    </ArwesProvider >
  )
}

export default App
