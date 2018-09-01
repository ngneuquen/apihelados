'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3801;
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/apitest', {useMongoClient:true})
    .then(()=>{
        console.log("La coneccion a la base de  datos se ha realizado correctamente.");
        app.listen(port,()=>{
            console.log("servidor corriendo en http://localhost:3801");
        })
    })
    .catch(err=>{
        console.log(err);
    });


