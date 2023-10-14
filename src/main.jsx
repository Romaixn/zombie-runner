import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import './index.css'
import { Leva } from 'leva'

const isProd = process.env.NODE_ENV === 'production'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Experience />
    {!isProd && <Leva />}
  </React.StrictMode>,
)
