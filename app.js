const express = require('express')
const todoRoute = require('./routes/todo.route')
const app = express() //creating the app

app.use(express.json())

app.use('/todos', todoRoute)

app.get('/', (req, res) => {
  res.json('Hello World')
})

// app.listen(3000, () => {
//   console.log('Server is now running')
// })

module.exports = app
