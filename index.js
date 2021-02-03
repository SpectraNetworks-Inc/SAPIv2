const DB = require('./handlers/mongoDB');
const JWT = require('./handlers/jwtCheck');
const config = require('./config');


//API Start

var express = require('express');
var app = express();



app.use(errorHandler)



app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.get('/test', JWT, function (req, res) {
    res.send('Yessss');
});

app.get('/unauthorized', JWT, function (req, res) {
    res.send('Yessss');
});


function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
  }
  

app.listen(config.APIConfig.apiPort);