import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
  name: '',
  email: '',
  password: ''
}

const SignUp = () => {
  const [fields, updateFields] = useState(initialState)

  const formFieldsHandler = (e) => {
    const { name, value } = e.target

    updateFields({
      ...fields,
      [name]: value
    })
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    const data = await axios.post('http://localhost:5000/users/signUp', {
        name: fields.name,
        password: fields.password,
        email: fields.password
      })

    console.log(data)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" placeholder="Name" name="name" value={fields.name}
        onChange={formFieldsHandler}
        required
      />
      <input type="email" placeholder="Email" name="email" value={fields.email}
        onChange={formFieldsHandler}
        required
      />
      <input type="password" placeholder="Password" name="password" value={fields.password}
        onChange={formFieldsHandler}
        required
      />      
      <button>Sign Up</button>
    </form>
  )
}

export default SignUp
