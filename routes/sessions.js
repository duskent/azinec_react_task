//--------------------------------- INITIALIZATION ---------------------------------------
var express = require('express'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    db = require('../models/db.js'),
    sessionItem = require('../models/sessions.js'),
    mongoose = require('mongoose'),
    router = express.Router({mergeParams: true});
//----------------------------------- UTILITIES ------------------------------------------
var getSessionAttributes = function (request) {
  return {
    title: request.body.title,
    startTime: request.body.startTime,
    endTime: request.body.endTime,
    status: request.body.status,
    registrationLimit: request.body.registrationLimit,
    remainingSeats: request.body.remainingSeats
  };
};
//----------------------------------- ROUTES ---------------------------------------------
router.route('/')
  // Index Route
  .get(function(request, response){
    // Find event first
    mongoose.model('Event').findById(request.params.id, function (err, eventItem) {
      if (err) {
        response.status(404).json(err);
      } else {
        response.json(eventItem.get('sessions'));
      }
    });
  })

  // Create POST request
  .post(jsonParser, function(request, response){
    // Create new Session
    var newSession = getSessionAttributes(request);
    newSession._id = mongoose.Types.ObjectId();
    // Find Event
    mongoose.model('Event').findByIdAndUpdate(request.params.id,
      {$push: {sessions: newSession}}, { 'new': true },
      function (err, eventItem) {
        if (err) {
          response.status(404).json(err);
        } else {
          response.status(201).json(eventItem);
        }
      });
  });

// Single item routes
router.route('/:id')
  // DELETE route
  .delete(function(request, response) {
    var sessionId = mongoose.Types.ObjectId(request.params.id);
    mongoose.model('Event').findOneAndUpdate({"sessions._id": sessionId},
      {$pull: { sessions: { _id: sessionId }}}, { 'new': true },
      function (err, sessionItem) {
        if (err) {
          response.status(404).json(err);
        } else {
          response.status(204).json();
        }
    });
  })
  // UPDATE
  .put(jsonParser, function (request, response) {
    var sessionId = mongoose.Types.ObjectId(request.params.id);
    // Create new Session
    var newSession = getSessionAttributes(request);
    newSession._id = mongoose.Types.ObjectId();
    // Update Event
    mongoose.model('Event').findOneAndUpdate({"sessions._id": sessionId},
    {$push: { sessions: newSession}}, { 'new': true },
    function (err) {
      if (err) {
        response.status(500).json(err);
      } else {
        // Remove Old session
        mongoose.model('Event').findOneAndUpdate({"sessions._id": sessionId},
        {$pull: { sessions: { _id: sessionId }}}, { 'new': true },
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
    var sessionId = mongoose.Types.ObjectId(request.params.id);
    mongoose.model('Event').findOne({"sessions._id": sessionId}, function (err, eventItem) {
      if (err) {
        response.status(404).json(err);
      } else {
        // How to get ?
        var session = eventItem.get('sessions').filter(function (item) {
          // Cast both to string becouse they are different objects but same values
          return ('' + item._id) === sessionId.toString();
        });
        response.json(session[0]);
      }
    });
  });

//-------------------------------------- EXPORT ------------------------------------------
module.exports = router;
