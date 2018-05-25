const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const propertySchema = new mongoose.Schema({

});

module.exports = mongoose.model('Property', propertySchema);
