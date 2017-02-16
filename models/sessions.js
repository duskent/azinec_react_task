var mongoose = require('mongoose');
var userSchema = require('./sessions.js');
var sessionSchema = new mongoose.Schema({
  title: String,
  startTime: Date,
  endTime: Date,
  status: String,
  registrationLimit: Number,
  remainingSeats: Number,
  users: [userSchema]
});
mongoose.model('Session', sessionSchema);
