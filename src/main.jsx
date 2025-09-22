import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StairLoadingEffect } from './components/LoadingEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StairLoadingEffect>
        <App />
      </StairLoadingEffect>
    </BrowserRouter>
  </StrictMode>,
)
