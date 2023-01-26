import React from 'react'
import Categories from '../Categories/Categories'
import './home.css'
import { MDBContainer } from 'mdb-react-ui-kit'

const Home = () => {
  return (
    <MDBContainer>.
        <h1>Welcome to ML</h1>
        <h3>The place to buy things online!</h3>
        <Categories/>
   </MDBContainer>

  )
}

export default Home
