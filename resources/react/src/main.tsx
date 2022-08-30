import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const element = document.getElementById('root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App {...element?.dataset}  />
  </React.StrictMode>
)
