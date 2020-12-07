'use strict'

const calulcate = require('./api/calculate')

module.exports = (app) => {
  app.use('/api/calculate', calulcate)
}
