import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

function App () {
  const [loggedIn, setLoggedIn] = useState(
    {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {
      }
    }
  )
  const logOut = () => {
    axios.delete('http://localhost:8000/logout', { withCredentials: true })
      .then(response => {
        setLoggedIn({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {}
        })
        navigate('/')
      })
      .catch(error => {
        console.log('logout error', error)
      })
  }
  const checkLoginStatus = () => {
    axios.get('http://localhost:8000/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && loggedIn.loggedInStatus === 'NOT_LOGGED_IN') {
          setLoggedIn({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user
          })
        } else if (!response.data.logged_in && loggedIn.loggedInStatus === 'LOGGED_IN') {
          setLoggedIn({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
          })
        }
      })
  }
  useEffect(() => {
    checkLoginStatus()
  }, [])

  const navigate = useNavigate()
  const handleLogin = (data) => {
    setLoggedIn({
      loggedInStatus: 'LOGGED_IN',
      user: data
    })
    navigate('/')
  }

  return (
    <div className="App">
   <Header logged={loggedIn} logOut={logOut} />
   <Routes>

<Route path="/" element={<Home logged={loggedIn}/>}/>
<Route path="/login" element={<Login handleLogin={handleLogin}/>} />
<Route path="/logout" element={<Login />} />
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
