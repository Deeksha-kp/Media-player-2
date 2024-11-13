

import { Routes , Route } from 'react-router-dom'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
// Footer

// Landing
// Home
// History



function App() {
 
  return (
    <>


    
    


      <Header/>
        <Routes>

          < Route element={<Landing/>} path='/'/>
          < Route element={ <Home/> } path='/Home'/>
          < Route element={  <History/> } path='/History'/>
        
        </Routes>
      <Footer/>






    </>
  )
}

export default App