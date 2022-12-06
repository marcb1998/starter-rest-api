const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//test
app.get('/test', (req, res) => {
  console.log('/test')
  res.json({ msg: 'dit is een test'}).end()
})

// Catch all handler for all other request.
app.use('*', (req, res) => {
  res.json({ msg: 'no route handler found' }).end()
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
