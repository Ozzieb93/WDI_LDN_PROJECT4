const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const propertySchema = new mongoose.Schema({
  address: { type: String, required: true},
  tenants: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  image: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

propertySchema.virtual('numberOfTenants')
  .get(function() {
    return this.tenants.length;
  });

propertySchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Property', propertySchema);
