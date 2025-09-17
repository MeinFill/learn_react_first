import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import {LS_NOTE_DATA} from './constants.jsx'

if (!localStorage.getItem(LS_NOTE_DATA)) {
  localStorage.setItem(LS_NOTE_DATA, JSON.stringify([]));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
