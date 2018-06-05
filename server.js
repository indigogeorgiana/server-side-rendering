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
server.get('/', (req, res) => {
  const viewData = {
    title: 'Gallery',
    art: art
  }
  res.render('home', viewData)
})

server.get('/artworks/:id', (req, res) => {
  const artId = req.params.id
  function isId (idNumber) {
    return idNumber.id === Number(artId)
  }
  const artW = art.find(isId)
  res.render('./partials/artworks', artW)
})
