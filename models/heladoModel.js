'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HeladoSchema = Schema({
    sabor:String,
    color:String
});
module.exports = mongoose.model('Helado',HeladoSchema);