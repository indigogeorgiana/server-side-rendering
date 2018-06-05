const art = require('./art.json')
const express = require('express')
const router = express.Router()

// Routes
router.get('/', (req, res) => {
  const viewData = {
    title: 'Gallery',
    art: art,
    copyright: 'This is copyright'
  }
  res.render('home', viewData)
})

router.get('/artworks/:id', (req, res) => {
  const id = req.params.id
  var artwork = art.find(function (element) {
    return element.id === parseInt(id)
  })
  res.render('artworks', artwork)
})

module.exports = router
