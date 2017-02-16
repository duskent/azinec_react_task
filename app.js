//----------------------------- Express Initialization -----------------------------------
var express = require('express');
var app = express();
//---------------------------- Static Middleware -----------------------------------------
app.use(express.static(__dirname + '/public'));
//------------------------------ Routes --------------------------------------------------
var events = require('./routes/events');
var sessions = require('./routes/sessions');
var users = require('./routes/users');
app.use('/events', events);
app.use('/events/:id/sessions', sessions);
app.use('/events/:id/sessions/:id/users', users);
//---------------------------- App Export ------------------------------------------------
module.exports = app;
