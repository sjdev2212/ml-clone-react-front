import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Sports from './components/Catalogue/Sports'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import Pets from './components/Catalogue/Pets'
import Instruments from './components/Catalogue/Instruments'
import HomeGarden from './components/Catalogue/HomeGarden'
import Gaming from './components/Catalogue/Gaming'
import Electro from './components/Catalogue/Electro'
import Clothing from './components/Catalogue/Clothing'
import Cellphones from './components/Catalogue/Cellphones'
import Cars from './components/Catalogue/Cars'

function App () {
  return (
    <div className="App">
   <Header />
   <Routes>

<Route path="/" element={<Home />}/>
<Route path="/sports" element={<Sports/>} />
<Route path="/login" element={<Login/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/about" element={<About/>} />
<Route path="/pets" element={<Pets/>} />
<Route path="/instruments" element={<Instruments/>} />
<Route path="/homegarden" element={<HomeGarden/>} />
<Route path="/gaming" element={<Gaming/>} />
<Route path="/electro" element={<Electro/>} />
<Route path="/clothes" element={<Clothing/>} />
<Route path="/cells" element={<Cellphones/>} />
<Route path="/cars" element={<Cars/>} />

   </Routes>
    </div>
  )
}

export default App
