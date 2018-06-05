const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')

const server = express()

server.engine('hbs', hbs({
  extname: 'hbs'
  // defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

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

server.get('/artworks/:id', (req, res) => {
  const id = req.params.id
  const artists = art.find((cb) => {
    return cb.id === Number(id)
  })
  res.render('home', artists)
})

module.exports = server
