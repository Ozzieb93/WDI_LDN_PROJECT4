const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const propertySchema = new mongoose.Schema({
  address: { type: String, required: true},
  tenants: { type: Number, required: true},
  image: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'Job'}
});

module.exports = mongoose.model('Property', propertySchema);
