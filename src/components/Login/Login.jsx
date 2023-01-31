import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const Login = ({ handleLogin }) => {
  const [showUser, setShowUser] = useState([])
  const [form, setForm] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: ''
  })

  const registrationUrl = 'http://localhost:8000/registrations'

  const getUser = async () => {
    const response = await axios.get('http://localhost:8000/users')
    try {
      setShowUser(response.data)
    } catch (error) {
      alert(error.message)
    }
  }
  const handleSubmit = async (e) => {
    axios.post(registrationUrl, {
      user: {
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation
      }

    }, {
      withCredentials: true
    }).then(response => {
      console.log('registration res', response)
      if (response.data.status === 'created') {
        console.log('registration res', response)
        handleLogin(response.data)
      }
    }
    ).catch(error => {
      console.log('registration error', error)
    }
    )
    e.preventDefault()
  }
  useEffect(() => {
    getUser()
  }, [])

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
      <ul>
        {showUser.map((user) => (
          <li key={user.id}>
            {user.email}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} >
        <input className='form-control' type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} required />
        <input className='form-control' type='password' name='password' placeholder='Password' value={form.password} onChange={handleChange} required />
        <input className='form-control' type='password' name='password_confirmation' placeholder='Password confirmation' value={form.password_confirmation} onChange={handleChange} required />
        <button className='btn btn-primary' type='submit'>Register</button>
      </form>

    </div>
  )
}
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default Login
