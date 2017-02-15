var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  status: String,
  registrationLimit: Number,
  remainingSeats: Number,
});
mongoose.model('Event', eventSchema);
