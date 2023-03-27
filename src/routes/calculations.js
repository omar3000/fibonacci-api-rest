const express = require('express')
const calculationsController = require('../controllers/calculations')
const calculations = express.Router()

calculations.get('/fibonacci/:n', calculationsController.getFibonacci)


module.exports = calculations