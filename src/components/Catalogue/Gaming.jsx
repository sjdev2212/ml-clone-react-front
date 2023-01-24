import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import axios from 'axios'
import './gaming.css'
/* import xbox from '../../assets/images/xbox.jpg'
import combo from '../../assets/images/combo.jpg' */

const Gaming = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const getItems = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/gaming')
    setTimeout(() => {
      setItems(response.data)
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    console.log(loading)
    getItems()
  }, [])
  console.log(loading)

  return (
    <div>
      <div>

      <h1>Gaming Section</h1>
      {loading && <ReactLoading type='spinningBubbles' color='green' />}
      </div>

      <section className='gaming-list'>
        {items.map(item => (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Us$: {item.price}</p>
      <img src={item.image} alt={item.name} />
    </div>
        ))}
      </section>
      <Link to='/'>Go back</Link>
    </div>
  )
}

export default Gaming
