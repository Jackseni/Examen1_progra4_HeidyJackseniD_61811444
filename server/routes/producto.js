const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)

app.get('/producto',(req,res) => {
    let body = req.body;

    let producto = new Producto({  
        nombre: body.nombre,
        precio: body.precio,
        //creado_en: body.creado_en,
    });

    producto.save((err,productoDB) => {
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            producto: productoDB
        })
    });
});

// Deberá hacer aquí el método post para producto (Valor 5 puntos)

app.post('/producto',(req,res) => {
    let body = req.body;

    let producto = new Producto({  
        nombre: body.nombre,
        precio: body.precio,
        
    });

    producto.save((err,productoDB) => {
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            producto: productoDB
        })
    });
});

module.exports = app;


