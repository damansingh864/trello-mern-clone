const { MongoClient } = require('mongodb')
// const MongoClient = MongoClient

const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true })

client.connect((err) => {
  if (err) {
    return console.log('Some error occured')    
  }

  console.log("Connected Successfully to server")
  const db = client.db('trello-app')
  client.close()
})
