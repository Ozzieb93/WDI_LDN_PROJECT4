const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');

const userSchema = new mongoose.Schema({
  userType: {type: String, required: true}, /* This will be the user type i.e the landlord or the property */
  firstname: { type: String, required: true},
  surname: { type: String},
  email: { type: String, require: true, unique: true},
  password: { type: String, required: true},
  bio: { type: String },
  image: { type: String, default: '../../assets/images/default-user.png' }
});

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
  // This.password is the hashed password. password is the user input password. They are compared and then sent to the controller where it is compared and verified using the users email and the unique validator.
};

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
    // The underscore is implying the passwordConfirmation is a tempory variable.
  });

//Before (pre) any function 'saves' something, run this function to encrypt the password before it is stored:
userSchema.pre('validate', function checkPassword(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
