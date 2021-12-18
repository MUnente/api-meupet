const express = require('express');

const routes = express.Router();

const dogController = require('./controller/dogController');
const ongController = require('./controller/ongController');

routes.get('/dogs', dogController.show);
routes.get('/ongs', ongController.show);

module.exports = routes;