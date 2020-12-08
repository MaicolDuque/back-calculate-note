/**
 * Routes to calculate
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

const { Router } = require('express')
const router = new Router()
const controller = require('./calculate.controller')

router.post('/', controller.calculate )
router.get('/test', (req, res) => res.send("Hello World!"))

module.exports = router
