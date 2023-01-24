import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import ClampLines from 'react-clamp-lines'
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
    }, 2000)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="container">
      <div className="loader">
        <h1>Gaming Section</h1>
        {loading && (<p>Loading...<ReactLoading type="spinningBubbles" color="green" /> </p>) }
      </div>

      <section>
        {items.map((item) => (
          <div className="gaming-list" key={item.id}>
            <div className="group">
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="sub-group">
                <h4 className="title">{item.name}</h4>
                <p className="price">Us$: {item.price}</p>
                <ClampLines
                  text={item.description}
                  id="default"
                  lines={1}
                  className="desc"
                />
                <p className="stock">In Stock: 0</p>
                <button className="add-cart">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default Gaming
