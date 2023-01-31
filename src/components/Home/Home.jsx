import React from 'react'
import Categories from '../Categories/Categories'
import './home.css'
import { MDBContainer } from 'mdb-react-ui-kit'
import PropTypes from 'prop-types'

const Home = ({ logged }) => {
  return (
    <MDBContainer>.
        <h1>Welcome to ML</h1>
        <h3>The place to buy things online!</h3>
        <h2>Status: {logged}</h2>
        <Categories/>
   </MDBContainer>

  )
}

Home.propTypes = {
  logged: PropTypes.object.isRequired
}

export default Home
