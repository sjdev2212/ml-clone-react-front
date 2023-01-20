import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'
import { UilStreering, UilBasketball } from '@iconscout/react-unicons'

const Categories = () => {
  return (
    <section className="container-list">
      <ul className="categories-list">
        <li>
          <Link to="/sports">
          <p>Sports & Fitnes</p>
          {<UilBasketball size="60"/>}
          </Link>
        </li>
        <li>
          <Link to='/cars'>
          <p>Cars</p>
          {<UilStreering size="60"/>}
          </Link>
         </li>
        <li>
          <Link to='/clothes'>
        <p>Clothing</p>
        {<UilStreering size="60"/>}
        </Link>
        </li>
        <li>
          <Link to='/gaming'>
          <p>Videogames</p>
        {<UilStreering size="60"/>}
        </Link>
        </li>
        <li>
          <Link to='/instruments'>
          <p>Musical Istruments</p>
        {<UilStreering size="60"/>}
        </Link>
        </li>
        <li>
          <Link to='/homegarden'>
          <p>Home & Garden</p>
        {<UilStreering size="60"/>}
        </Link>
        </li>
        <li>
          <Link to='/cells'>
          <p>Cell phones</p>
        {<UilStreering size="60"/>}
        </Link>
        </li>
        <li>
          <Link to='/electro'>
          <p>Electronics</p>
        {<UilStreering size="60"/>}
        </Link>
        </li>
        <li>
          <Link to='/pets'>
          <p>Pets</p>
    {<UilStreering size="60"/>}
    </Link>
        </li>
      </ul>
    </section>
  )
}

export default Categories
