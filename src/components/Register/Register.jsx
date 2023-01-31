import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const Register = ({ handleRegister }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: ''
  })

  const registrationUrl = 'http://localhost:8000/registrations'

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
        handleRegister(response.data)
      }
    }
    ).catch(error => {
      console.log('registration error', error)
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
        <h2> Register
</h2>
     <form onSubmit={handleSubmit} >
        <input className='form-control' type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} required />
        <input className='form-control' type='password' name='password' placeholder='Password' value={form.password} onChange={handleChange} required />
        <input className='form-control' type='password' name='password_confirmation' placeholder='Password confirmation' value={form.password_confirmation} onChange={handleChange} required />
        <button className='btn btn-primary' type='submit'>Register</button>
      </form>

    </div>
  )
}
Register.propTypes = {
  handleRegister: PropTypes.func.isRequired
}

export default Register
