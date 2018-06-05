const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')
const route = require('./route.js')

const server = express()
module.exports = server

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes
server.get('/', route.homePage)
server.get('/artworks/:id', route.findArt)
