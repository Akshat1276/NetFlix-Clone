import React from 'react'
import Home from './Pages/Home/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Player/:id' element={<Player/>}/>
      </Routes>
      
    </div>
  )
}

export default App