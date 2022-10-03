import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from "./routes"
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
    <GlobalStyle />
    <ToastContainer theme="colored" autoClose={2000}/>
  </React.StrictMode>
)
