import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import Categorie from './components/Catalogue/Categorie'
/* import Pets from './components/Catalogue/Pets'
import Instruments from './components/Catalogue/Instruments'
import HomeGarden from './components/Catalogue/HomeGarden'
import Gaming from './components/Catalogue/Gaming'
import Electro from './components/Catalogue/Electro'
import Clothing from './components/Catalogue/Clothing'
import Cellphones from './components/Catalogue/Cellphones'
import Cars from './components/Catalogue/Cars' */
import Detail from './components/Catalogue/Detail'

function App () {
  return (
    <div className="App">
   <Header />
   <Routes>

<Route path="/" element={<Home />}/>
<Route path="/login" element={<Login/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/about" element={<About/>} />
<Route path="/categorie/:param" element={<Categorie/>} />
<Route path="/details/:param/:id" element={<Detail/>} />

   </Routes>
    </div>
  )
}

export default App
