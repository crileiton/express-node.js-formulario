'use strict';
var express = require('express');
var app = express();

app.set('view engine', 'hbs');


app.get('/', function(req, res)
{
    var num1 = req.query.numero1;
    var num2 = req.query.numero2;

    var valor1 = parseInt(num1);
    var valor2 = parseInt(num2);

    var resultado = valor1 + valor2;

    if(isNaN(valor1)||isNaN(valor2)){
        resultado = 0;
    }

    res.render('template', {valor: resultado});
});

app.listen(3000);