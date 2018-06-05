const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')

const server = express()
server.use('/routes', routes)
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
