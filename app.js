//----------------------------- Express Initialization -----------------------------------
var express = require('express');
var app = express();
var path = require('path');
//---------------------------- Static Middleware -----------------------------------------
app.use(express.static(__dirname + '/public'));
//------------------------------ Routes --------------------------------------------------
var events = require('./routes/events');
var sessions = require('./routes/sessions');
var users = require('./routes/users');
app.use('/api/events', events);
app.use('/api/events/:id/sessions', sessions);
app.use('/api/events/:id/sessions/:id/users', users);
app.get('/events/:id', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
app.get('/events', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
//---------------------------- App Export ------------------------------------------------
module.exports = app;
