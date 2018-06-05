const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')

const server = express()
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes

// server.get('/', (req, res) => {
//   res.send('Hello, world!')
// })

server.get('/', (req, res) => {
  const viewData = {
    art: art
  }
  res.render('home', viewData)
})
