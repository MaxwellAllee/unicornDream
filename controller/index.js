const apiController = require('express').Router();

apiController.use('/dreams', require('./dreams'));

module.exports = apiController