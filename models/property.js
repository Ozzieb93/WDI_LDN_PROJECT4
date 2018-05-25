const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const propertySchema = new mongoose.Schema({
  address: { type: String, required: true},
  tenants: { type: Number, required: true},
  image: { type: String }
});

module.exports = mongoose.model('Property', propertySchema);
