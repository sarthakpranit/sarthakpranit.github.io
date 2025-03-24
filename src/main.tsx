
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure __WS_TOKEN__ is available globally
if (typeof window !== 'undefined' && typeof __WS_TOKEN__ !== 'undefined') {
  window.__WS_TOKEN__ = __WS_TOKEN__;
}

createRoot(document.getElementById("root")!).render(<App />);
