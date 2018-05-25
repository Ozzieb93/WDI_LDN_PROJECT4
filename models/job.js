const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const jobSchema = new mongoose.Schema({
  description: { type: String, required: true},
  image: {type: String},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('Job', jobSchema);
