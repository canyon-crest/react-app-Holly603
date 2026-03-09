import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name="Apples" description="They are apples." />
    <Card name="Grapes" description="They are green grapes." />
    <Card name="Oranges" description="They are oranges." />
    <App />
  </StrictMode>,
)
