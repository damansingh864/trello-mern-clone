const express = require('express')

const router = express.Router()

router.get('/login', (req, res) => {
  res.send('Welcome to Login Page')
})

router.post('/users/signUp', (req, res) => {
  console.log("Damanv: ", req.body)
  res.send('Welcome to SignUp Page')
})

module.exports = router