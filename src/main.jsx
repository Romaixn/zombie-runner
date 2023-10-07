import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import './index.css'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Leva />
    <Canvas>
        <Experience />
    </Canvas>
  </React.StrictMode>,
)
