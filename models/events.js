var mongoose = require('mongoose');
var sessionSchema = require('./sessions.js');
var eventSchema = new mongoose.Schema({
  title: String,
  startTime: Date,
  endTime: Date,
  status: String,
  registrationLimit: Number,
  remainingSeats: Number,
  sessions: [sessionSchema]
});
mongoose.model('Event', eventSchema);
