import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './input.css'

if (import.meta.env.MODE === 'development') { // For Maps and Places API key.
    import('dotenv').then((dotenv) => dotenv.config());
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
