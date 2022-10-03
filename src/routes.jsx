import React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'
  
import Home from "./containers/Home/index"
import Usuario from "./containers/Usuario/index"

const Root = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/usuario" element={<Usuario />} />
            </Routes>
        </Router>
    )
}

export default Root
