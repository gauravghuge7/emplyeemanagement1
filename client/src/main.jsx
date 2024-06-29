import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// this code is the localhost url
import axios from 'axios'

axios.defaults.baseURL = `https://emplyeemanagement1-production.up.railway.app/api/v1/`
axios.defaults.withCredentials = true  // for gaingin access-control-allow-credentials


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <div className="min-h-screen ">
      <App />
    </div>
    {/* </ThemeProvider> */}

  </React.StrictMode>
)

