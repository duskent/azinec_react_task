//--------------------------------- INITIALIZATION ---------------------------------------
var express = require('express'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    db = require('../models/db.js'),
    eventItem = require('../models/events.js'),
    mongoose = require('mongoose'),
    router = express.Router();
//----------------------------------- UTILITIES ------------------------------------------
var getEventAttributes = function (request) {
  return {
    title: request.body.title,
    start: request.body.start,
    end: request.body.end,
    status: request.body.status,
    registrationLimit: request.body.registrationLimit,
    remainingSeats: request.body.remainingSeats
  };
};
//----------------------------------- ROUTES ---------------------------------------------
router.route('/')
  // Index Route
  .get(function(request, response){
    mongoose.model('Event').find({}, function (err, events) {
      if (err) {
        response.status(500).json(err);
      } else {
        response.json(events);
      }
    });
  })

  // Create POST request
  .post(jsonParser, function(request, response){
    // Model creation
    mongoose.model('Event').create(getEventAttributes(request), function (err, newEvent) {
      if (err) {
        response.status(422).json(err);
      } else {
        response.status(201).json(newEvent);
      }
    });
  });

// Single item routes
router.route('/:id')
  // DELETE route
  .delete(function(request, response) {
    mongoose.model('Event').findById(request.params.id, function (err, eventItem) {
      if (err) {
        response.status(404).json(err);
      } else {
        eventItem.remove(function (err, eventItem) {
          if (err) {
            response.status(500).json(err);
          } else {
            response.status(204).json();
          }
        });
      }
    });
  })
  // UPDATE
  .put(jsonParser, function (request, response) {
    // Find item
    mongoose.model('Event').findById(request.params.id, function (err, eventItem) {
      if (err) {
        response.status(404).json(err);
      } else {
        // UPDATE
        eventItem.update(getEventAttributes(request), function (err, eventID) {
          if (err) {
            response.status(500).json(err);
          } else {
            response.status(200).json(eventItem)
          }
        })
      }
    });
  })
  // GET one item route
  .get(function(request, response) {
    mongoose.model('Event').findById(request.params.id, function (err, eventItem) {
      if (err) {
        response.status(404).json(err);
      } else {
        response.json(eventItem);
      }
    });
  });

//-------------------------------------- EXPORT ------------------------------------------
module.exports = router;
