import React from 'react'
import './categories.css'
import { UilStreering, UilBasketball } from '@iconscout/react-unicons'

const Categories = () => {
  return (
    <section className="container-list">
      <ul className="categories-list">
        <li>
          <p>Sports & Fitnes</p>
          {<UilBasketball size="60"/>}
        </li>
        <li>
          <p>Cars</p>
          {<UilStreering size="60"/>}
         </li>
        <li>
        <p>Clothing</p>
        {<UilStreering size="60"/>}
        </li>
        <li>
          <p>Videogames</p>
        {<UilStreering size="60"/>}
        </li>
        <li>
          <p>Musical Istruments</p>
        {<UilStreering size="60"/>}
        </li>
        <li>
          <p>Home & Garden</p>
        {<UilStreering size="60"/>}
        </li>
        <li>
          <p>Cell phones</p>
        {<UilStreering size="60"/>}
        </li>
        <li>
          <p>Electronics</p>
        {<UilStreering size="60"/>}
        </li>
        <li>
          <p>Pets</p>
        {<UilStreering size="60"/>}
        </li>
      </ul>
    </section>
  )
}

export default Categories
