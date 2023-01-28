import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import axios from 'axios'
import './categorie.css'

const Categorie = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  let pathname = window.location.pathname
  pathname = pathname.replace('/categorie/', '')

  const getItems = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/${pathname}`)
    try {
      setItems(response.data)
      setLoading(false)
    } catch (error) {
      alert(error.message)
    }
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
      <section className="box-group">
      {items.map((item) => (
<Link to={`/details/${item.param}/${item.id}`} key={item.id} className='box'>
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

export default Categorie
