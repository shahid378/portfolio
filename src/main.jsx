import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ActivePortfolio from '@active-portfolio'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActivePortfolio />
  </StrictMode>,
)
