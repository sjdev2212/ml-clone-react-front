import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <nav>

        <ul className='nav-list'>
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to='/about' > About</Link>
          </li>

            <li>Cart
          <Link to='/cart'>Cart </Link>
          </li>
          <li>
          <Link to='/login'>Login  </Link>
           </li>

        </ul>

    </nav>
  )
}

export default Header
