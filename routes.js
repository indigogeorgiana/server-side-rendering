const data = require('./data')
const express = require('express')
const router = express.Router()

// Routes
router.get('/', (req, res) => {
  const viewData = {
    title: 'Gallery',
    art: data.getAll(),
    copyright: 'This is copyright'
  }
  res.render('home', viewData)
})

router.get('/artworks/:id', (req, res) => {
  const id = req.params.id
  var artwork = data.getById(id)
  res.render('artworks', artwork)
})

/*router.get('/artworks/:id', (req, res) => {
  const id = req.params.id
  var artwork = art.find(function (element) {
    return element.id === parseInt(id)
  })
  res.render('artworks', artwork)
}) */

module.exports = router
