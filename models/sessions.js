var mongoose = require('mongoose');
var sessionSchema = new mongoose.Schema({
  title: String,
  startTime: Date,
  endTime: Date,
  status: String,
  registrationLimit: Number,
  remainingSeats: Number
});
mongoose.model('Session', sessionSchema);
