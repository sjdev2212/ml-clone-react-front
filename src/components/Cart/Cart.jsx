import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'

const Cart = () => {
  const [itemCart, setItemCart] = useState([])
  const [loading, setLoading] = useState(true)
  let pathname = window.location.pathname
  pathname = pathname.replace('/cart/', '')
  console.log(pathname)

  const getItemCart = async () => {
    const response = await axios.get(`http://localhost:8000/${pathname}`)
    try {
      setItemCart(response.data)
      setLoading(false)
    } catch (error) {
      alert(error.message)
    }
  }
  console.log(itemCart)

  useEffect(() => {
    getItemCart()
  }, [])
  return (
    <div>
      <h1>Cart Section</h1>
      {loading && (<p>Loading...<ReactLoading type="spinningBubbles" color="green" /> </p>) }
      <section className="box-group">
        {itemCart[0].name}
      </section>

    </div>
  )
}

export default Cart
