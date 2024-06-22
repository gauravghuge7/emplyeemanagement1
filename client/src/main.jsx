import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


   // this code is the localhost url
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5200/api/v1/'
axios.defaults.withCredentials = true  // for gaingin access-control-allow-credentials


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <App />
    </div>
  </React.StrictMode>
)

