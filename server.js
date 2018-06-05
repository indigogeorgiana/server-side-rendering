const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')

const server = express()

// Routes
server.get('/', (req, res) => {
  const viewData = {
    title: 'Gallery \n',
    art: art,
    name: art,
    license: art

  }
  res.render('home', viewData)
})

server.engine('hbs', hbs({
  extname: 'hbs'
  // defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

module.exports = server
