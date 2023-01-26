import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
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
          <Link style={linkNav} to='/login'>Login  </Link>
           </li>

        </ul>

    </nav>
  )
}

export default Header
