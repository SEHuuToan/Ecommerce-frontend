import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let HOST = import.meta.env.VITE_BASE_URL_LOCAL

ReactDOM.createRoot(document.getElementById('root')).render(
       <App />
)

export default HOST;