var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var events = require('./routes/events');
app.use('/events', events);

module.exports = app;
