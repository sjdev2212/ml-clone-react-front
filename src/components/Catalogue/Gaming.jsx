import React from 'react'
import { Link } from 'react-router-dom'
import xbox from '../../assets/images/xbox.jpg'
import combo from '../../assets/images/combo.jpg'

const Gaming = () => {
  const items = [
    {
      id: 1,
      name: 'Xbox One',
      price: 299.99,
      description: 'Xbox One is the best console ever made',
      image: xbox
    },
    {
      id: 2,
      name: 'Combo Gamer',
      price: 50.99,
      description: 'Combo Gamer ',
      image: combo

    }
  ]
  return (
    <div>
      <h1>Gaming Section</h1>
      <section>
  {items.map(item => (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img src={item.image} alt={item.name} />
    </div>
  ))}
      </section>
      <Link to='/'>Go back</Link>
    </div>
  )
}

export default Gaming
