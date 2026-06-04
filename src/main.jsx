import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { init } from '@visshnnu-tejaa/snapcss'
import './tokens.css'
import './components.css'
import './index.css'
import App from './App.jsx'

init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
