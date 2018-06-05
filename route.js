const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')
const server = express()

module.exports = {
  homePage,
  findArt
}

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

function homePage (req, res) {
  const viewData = {
    title: 'Gallery',
    art: art,
    isTitle: true
  }
  res.render('home', viewData)
}

function findArt (req, res) {
  const artId = req.params.id
  function isId (idNumber) {
    return idNumber.id === Number(artId)
  }
  const artW = art.find(isId)
  res.render('./partials/artworks', artW)
}