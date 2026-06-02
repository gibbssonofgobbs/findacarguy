import React from 'react'
import ReactDOM from 'react-dom/client'
import FindACarGuy from './FindACarGuy'
import NotFound from './NotFound'

function App() {
  const path = window.location.pathname
  if (path === '/' || path === '/index.html') return <FindACarGuy />
  return <NotFound />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
