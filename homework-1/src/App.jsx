import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div style={{textAlign:'center', marginTop:'50px'}}><h1>Hello, React!</h1></div>
      <Footer />
    </>
  )
}

export default App
