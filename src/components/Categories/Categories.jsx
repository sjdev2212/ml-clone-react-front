import React from 'react'
import './categories.css'
import { UilStreering } from '@iconscout/react-unicons'

const Categories = () => {
  return (
    <section className="container-list">
      <ul className="categories-list">
        <li>Sports & Fitnes</li>
        <li>Cars
          {<UilStreering size="50" color="#61DAFB"/>}
         </li>
        <li>Clothing</li>
        <li>Videogames</li>
        <li>Musical Istruments</li>
        <li>Home appliances</li>
        <li>Cell phones</li>
        <li>Electronics</li>
        <li>Pets</li>
      </ul>
    </section>
  )
}

export default Categories
