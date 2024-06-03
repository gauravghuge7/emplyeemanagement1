import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <App />
    </div>
  </React.StrictMode>
)
