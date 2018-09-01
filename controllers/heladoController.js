'use strict'
var path = require('path');
var fs = require('fs');
var Helado = require('../models/heladoModel');
module.exports = {
    create: function (req, res) {
        var helado = new Helado();
        var params = req.body;
        helado.sabor = params.sabor;
        helado.color = params.color;
        helado.save((error, helado) => {
            if (error) return res.status(500).send({
                message: 'Error al guardar'
            });
            if (!helado) {
                res.status(404).send({
                    message: 'no se ha guardado'
                });
            }
            return res.status(200).send({
                helado: helado
            });
        })
    },
    list: function (req,res) {
        Helado.find((error, helados) => {
            if (error) return res.status(500).send({
                message: 'Error al guardar'
            });
            if (!helados) {
               return res.status(404).send({
                    message: 'no se ha guardado'
                });
            }
            return res.status(200).send({
                helado: helados
            });
        });
    },
    show: function (req,res) {
        var id = req.params.id;
        Helado.findById(id, (error, helado) => {
            if (error) return res.status(500).send({
                message: 'Error al guardar'
            });
            if (!helado) {
                res.status(404).send({
                    message: 'no se ha guardado'
                });
            }
            return res.status(200).send({
                helado: helado
            });
        });
    },
    update: function (req,res) {
        var id = req.params.id;
        var params = req.body;
        Helado.findById(id, (error, helado) => {
            if (error) return res.status(500).send({
                message: 'Error al guardar'
            });
            if (!helado) {
                res.status(404).send({
                    message: 'no se ha guardado'
                });
            }
            helado.sabor = params.sabor;
            helado.color = params.color;
            helado.save((error, heladoactualizado) => {
                if (error) return res.status(500).send({
                    message: 'Error al guardar'
                });
                if (!heladoactualizado) {
                    res.status(404).send({
                        message: 'no se ha guardado'
                    });
                }
                return res.status(200).send({
                    helado: heladoactualizado
                });
            })

        });
    },
    delete: function (req,res) {
        var id = req.params.id;
        Helado.findById(id).remove((err) => {
            if (err) return res.status(500).send({
                message: err.message + 'Error '
            });
            return res.status(200).send({
                message: 'eliminado'
            })
        })
    }
}