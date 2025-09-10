import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './LandingPage/HomePage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
