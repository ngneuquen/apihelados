'use strict'
var express = require('express');
var heladoController = require('../controllers/heladoController');
var api = express.Router();

api.get('/', heladoController.list);
api.get('/:id', heladoController.show);
api.post('/', heladoController.create);
api.put('/:id', heladoController.update);
api.delete('/:id', heladoController.delete);

module.exports = api;