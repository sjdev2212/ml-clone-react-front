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
        <h2>Status: {logged.loggedInStatus}</h2>
{/*       <span>{
        logged.loggedInStatus === 'NOT_LOGGED_IN' ? 'You are not logged in' : (<p>Welcome {logged.user.user.email}</p>)
      }</span> */}
        <Categories/>
   </MDBContainer>

  )
}

Home.propTypes = {
  logged: PropTypes.object
}

export default Home
