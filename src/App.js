import React from 'react'
import './App.css'
import Categories from './components/Categories/Categories'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App () {
  return (
    <div className="App">
   <Header />
   <Home/>
   <Categories />
    </div>
  )
}

export default App
