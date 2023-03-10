import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import axios from 'axios'
import './gaming.css'

const Gaming = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const getItems = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/gaming')
    setTimeout(() => {
      setItems(response.data)
      setLoading(false)
    }, 1000)
  }
  console.log(items)
  useEffect(() => {
    getItems()
  }, [])
  /*  const handleonClick = (id) => {
    <Navigate to="/details" />
  } */
  return (
    <div className="container">
      <div className="loader">
        <h1>Gaming Section</h1>
        {loading && (<p>Loading...<ReactLoading type="spinningBubbles" color="green" /> </p>) }
      </div>

      <section className="box-group">
      {items.map((item) => (
<Link to={`/details/${item.id}`} key={item.id} className='box'>
            <div key={item.id} className='box'>
         <img src={item.image} alt="" />
            <h3>{item.shortdesc}</h3>
          <p >US$: {item.price}</p>
            </div>
          </Link>

      )) }

      </section>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default Gaming
