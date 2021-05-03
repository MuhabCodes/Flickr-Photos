const { Schema, model } = require('mongoose');

const cameraSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brandName: {
    type: Schema.Types.String,
    ref: 'cameraBrand',
    required: true,
  },
  storageType: {
    type: String,
  },
  imageURL: {
    type: String,
    // TODO: add a proper URL
  },
  megaPixels: {
    type: String,

  },
  zoom: {
    type: String,
  },

});
module.exports = model('Camera', cameraSchema);
