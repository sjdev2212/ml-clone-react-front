import React from 'react'
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'

const Cars = () => {
  return (
    <div>
      <h1>Cars Section</h1>
      <ReactLoading type='bars' color='#000' />

<Link to='/'>Go back</Link>
    </div>
  )
}

export default Cars
