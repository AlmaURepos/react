import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './components/Timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid"><span className="navbar-brand mb-0 h1">Таймер</span></div>
        </nav>
      </div>
      <Timer />
      
    </>
  )
}

export default App
