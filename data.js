const art = require('./art')

module.exports = {
  getAll,
  getById
}

function getAll () {
  return art
}

function getById (id) {
  var tmpEle = art.find(function (element) {
    return element.id === parseInt(id)
  })
  return tmpEle
}
