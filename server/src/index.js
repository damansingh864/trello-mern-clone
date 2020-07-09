const express = require('express')
const userRouter = require('./routes/users')
require('./db/db')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use(userRouter)

app.get('/', (req, res) => {
  console.log(req.body)
  res.send("<h1>Dmaanvir</h1>")
})


app.listen(port, () => {
  console.log("Running Succcessfully")
})
