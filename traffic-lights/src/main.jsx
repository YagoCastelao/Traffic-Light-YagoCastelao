import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TrafficLights from './components/TrafficLights' 

createRoot(document.getElementById('root')).render(
    <TrafficLights />
)