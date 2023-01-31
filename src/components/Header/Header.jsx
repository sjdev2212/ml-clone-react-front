import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './header.css'

const Header = ({ logged, logOut }) => {
  const linkNav = {
    color: 'whitesmoke',
    textDecoration: 'none',
    padding: '0 10px',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }
  return (
    <nav>

        <ul className='nav-list'>
            <li>
            <Link style={linkNav} to="/">Home</Link>
          </li>
          <li>
          <Link style={linkNav} to='/about' > About</Link>
          </li>

            <li>
          <Link style={linkNav} to='/cart'>Cart </Link>
          </li>
          <li>
            {
              logged.loggedInStatus === 'NOT_LOGGED_IN' ? <Link style={linkNav} to='/login' >Login </Link> : <Link style={linkNav} to='/login' onClick={() => logOut()}>Logout </Link>
            }

           </li>

        </ul>

    </nav>
  )
}
Header.propTypes = {
  logged: PropTypes.object,
  logOut: PropTypes.func
}

export default Header
