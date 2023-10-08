import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import './index.css'
import { Leva } from 'leva'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Experience />
    <Leva />
  </React.StrictMode>,
)
