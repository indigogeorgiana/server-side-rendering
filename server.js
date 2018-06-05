const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')

const server = express()
// The / in server.use determines the home directory
// If you replace it with /route, then your home directory is localhost:3000/routes/
server.use('/', routes)
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
