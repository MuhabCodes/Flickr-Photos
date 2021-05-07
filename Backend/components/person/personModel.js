const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  birthDate:
  {
    type: String,
    required: true,

  },
  realName:
  {
    type: String,
    required: true,

  },
  dateCreated:
  {
    type: String,
    required: true,

  },
  description:
  { type: String },

  homeTown:
  { type: String },

  occupation:
  { type: String },

  city:
  { type: String },
  country:
  { type: String },
});

module.exports = mongoose.model('Person', personSchema);