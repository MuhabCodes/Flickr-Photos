const { Schema, model } = require('mongoose');

const cameraBrandSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

});
module.exports = model('cameraBrand', cameraBrandSchema);
