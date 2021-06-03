const { Schema, model } = require('mongoose');

const cameraBrandSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  topModels: {
    type: [String],
  },
  modelTypes: {
    type: [String],
  },
  image: {
    type: String,
  },

});
module.exports = model('cameraBrand', cameraBrandSchema);
