const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')

const server = express()
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes
server.get('/', (req, res) => {
  const viewData = {
    title: 'Gallery',
    art: art,
    copyright: 'This is copyright'
  }
  res.render('home', viewData)
})

server.get('/artworks/:id', (req, res) => {
  const id = req.params.id
  var artwork = art.find(function (element) {
    return element.id === parseInt(id)
  })
  res.render('artworks', artwork)
})
