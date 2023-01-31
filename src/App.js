import React, { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import Categorie from './components/Catalogue/Categorie'
import Register from './components/Register/Register'
import Detail from './components/Catalogue/Detail'

function App () {
  const [loggedIn, setLoggedIn] = useState(
    {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {
      }
    }
  )
  const navigate = useNavigate()
  const handleLogin = (data) => {
    setLoggedIn({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
    navigate('/')
  }

  return (
    <div className="App">
   <Header />
   <Routes>

<Route path="/" element={<Home logged={loggedIn.loggedInStatus}/>}/>
<Route path="/login" element={<Login handleLogin={handleLogin}/>} />
<Route path="/register" element={<Register handleRegister={handleLogin}/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/about" element={<About/>} />
<Route path="/categorie/:param" element={<Categorie/>} />
<Route path="/details/:param/:id" element={<Detail/>} />

   </Routes>
    </div>
  )
}

export default App
