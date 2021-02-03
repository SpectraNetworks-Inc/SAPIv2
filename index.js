const DB = require('./handlers/mongoDB');
const JWT = require('./handlers/jwtCheck');
const config = require('./config');


//API Start

var express = require('express');
var app = express();


app.use(JWT);







app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});




app.listen(config.APIConfig.apiPort);