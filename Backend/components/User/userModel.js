const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email field is required'],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  isPro: {
    type: Boolean,
    default: false,
  },
  galleries: {
    type: [String], // TODO : Change to gallery array when gallery is done
  },
  albums: {
    type: [String], // TODO : Change to album when album is done.
  },

  // personId: {
  //   type: String, // TODO : Change to person ID when person is added
  // },
  // TODO : Add proper data structure to store following and followers
},
{ autoCreate: true });

module.exports = model('User', userSchema);
