//--------------------------------- INITIALIZATION ---------------------------------------
var express = require('express'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    db = require('../models/db.js'),
    userItem = require('../models/users.js'),
    mongoose = require('mongoose'),
    router = express.Router({mergeParams: true});
//----------------------------------- UTILITIES ------------------------------------------
var getUserAttributes = function (request) {
  return {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    phone: request.body.phone,
    company: request.body.company
  };
};
//----------------------------------- ROUTES ---------------------------------------------
router.route('/')
  // Index Route
  .get(function(request, response){
    var sessionId = mongoose.Types.ObjectId(request.params.id);
    mongoose.model('Event').findOne({"sessions._id": sessionId}, function (err, eventItem) {
      if (err) {
        response.status(404).json(err);
      } else {
        // How to get ?
        if (eventItem) {
          var session = eventItem.get('sessions').filter(function (item) {
            // Cast both to string becouse they are different objects but same values
            return ('' + item._id) === sessionId.toString();
          });
          var users = session[0]['users'] || [];
          response.json(users);
        } else {
          response.status(404).json();
        }
      }
    });
  })

  // Create POST request
  .post(jsonParser, function(request, response){
    // Create new Session
    var newUser = getUserAttributes(request);
    newUser._id = mongoose.Types.ObjectId();
    var sessionId = mongoose.Types.ObjectId(request.params.id);
    // Search for Events & Session
    mongoose.model('Event').findOneAndUpdate({"sessions._id": sessionId},
      {$push: {"sessions.$.users": newUser}}, { 'new': true },
      function (err, eventItem) {
        if (err) {
          response.status(404).json(err);
        } else {
          response.json(eventItem);
        }
     });
  });

// Single item routes
router.route('/:id')
  // DELETE route
  .delete(function(request, response) {
    var userId = mongoose.Types.ObjectId(request.params.id);
    mongoose.model('Event').findOneAndUpdate({"sessions.users._id": userId},
      {$pull: { "sessions.$.users": { "_id": userId}}}, { 'new': true },
      function (err, eventItem) {
        if (err) {
          response.status(404).json(err);
        } else {
          response.status(204).json();
        }
     });
  })
  // UPDATE
  .put(jsonParser, function (request, response) {
    var newUser = getUserAttributes(request);
    newUser._id = mongoose.Types.ObjectId();
    var userId = mongoose.Types.ObjectId(request.params.id);
    // Search for Events & Session
    mongoose.model('Event').findOneAndUpdate({"sessions.users._id": userId},
      {$push: {"sessions.$.users": newUser}}, { 'new': true },
      function (err, eventItem) {
        if (err) {
          response.status(404).json(err);
        } else {
          mongoose.model('Event').findOneAndUpdate({"sessions.users._id": userId},
            {$pull: { "sessions.$.users": { "_id": userId}}}, { 'new': true },
            function (err, eventItem) {
              if (err) {
                response.status(404).json(err);
              } else {
                response.json(eventItem);
              }
           });
        }
     });
  })
  // GET one item route
  .get(function(request, response) {
    var userId = mongoose.Types.ObjectId(request.params.id);
    mongoose.model('Event').findOne({"sessions.users._id": userId}, function (err, eventItem) {
      if (err) {
        response.status(404).json(err);
      } else {
        // How to get ?
        var user = eventItem.get('sessions').filter(function (item) {
          // Cast both to string becouse they are different objects but same values
          if (item.users) {
            var foundUser = item.users.filter(function (userItem) {
              return ('' + userItem._id) === userId.toString()
            });
            response.json(foundUser[0]);
          } else {
            response.status(404).json();
          }
        });
      }
    });
  });

//-------------------------------------- EXPORT ------------------------------------------
module.exports = router;
