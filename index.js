const express = require('express')

const app = express()

const port = process.env.PORT || 8080;

app.get('/', (req,res) => {
  res.status(200).json('Hello world from travis')
})

module.exports = app.listen(port, () => console.log('it works :D ${port}'))
