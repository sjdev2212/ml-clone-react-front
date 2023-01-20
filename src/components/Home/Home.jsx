import React from 'react'
import Categories from '../Categories/Categories'
import './home.css'

const Home = () => {
  return (
    <div className='container'>
      <section >
        <h1>Welcome to ML</h1>
        <h3>The place to buy things online!</h3>
        </section>
        <section>
        <Categories/>
        </section>

    </div>
  )
}

export default Home
