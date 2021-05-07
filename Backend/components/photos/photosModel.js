const mongoose = require('mongoose');

const photosSchema = mongoose.Schema({

  isPublic:
      { type: Boolean },
  title:
      { type: String },
  secret:
      { type: String },
  isFamily:
      { type: Boolean },
  isFriend:
      { type: Boolean },

});

module.exports = mongoose.model('Photos', photosSchema);
