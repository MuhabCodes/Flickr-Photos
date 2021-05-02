const { Schema, model } = require('mongoose');

const cameraBrandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

});
module.exports = model('cameraBrand', cameraBrandSchema);
