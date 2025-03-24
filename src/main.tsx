
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Ensure global variables are defined
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__WS_TOKEN__ = window.__WS_TOKEN__ || 'lovable-ws-token';
  
  // Make sure we define it in a way that's accessible to Vite's client
  // @ts-ignore
  globalThis.__WS_TOKEN__ = 'lovable-ws-token';
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
