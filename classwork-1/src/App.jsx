import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header/Header'
import ProfileCard from './components/ProfileCard/ProfileCard'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <main style={{minHeight:'80vh'}} className='d-flex justify-content-center align-items-start'>
        <ProfileCard/>
      </main>
      <Footer/>
    </>
  )
}

export default App
