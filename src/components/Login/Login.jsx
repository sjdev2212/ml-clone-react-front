import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Login = ({ handleLogin }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    loginErrors: ''
  })

  const loginUrl = 'http://localhost:8000/sessions'
  const handleSubmit = async (e) => {
    axios.post(loginUrl, {
      user: {
        email: form.email,
        password: form.password

      }

    }, {
      withCredentials: true
    }).then(response => {
      console.log('login res', response.data)
      if (response.data.status === 401) {
        console.log('login res', response)
        handleLogin(response.data)
      }
    }
    ).catch(error => {
      console.log('login error', error)
    }
    )
    e.preventDefault()
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <h1>
        Login
      </h1>

      <form onSubmit={handleSubmit} >
        <input className='form-control' type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} required />
        <input className='form-control' type='password' name='password' placeholder='Password' value={form.password} onChange={handleChange} required />
        <button className='btn btn-primary' type='submit'>Log in</button>
      </form>
      <p>
        Don&#39;t  have an account? <Link to='/register' >Register </Link>
      </p>

    </div>
  )
}
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default Login
