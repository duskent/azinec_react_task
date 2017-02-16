var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  company: String
});
mongoose.model('User', userSchema);
