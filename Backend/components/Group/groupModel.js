const { Schema, model } = require('mongoose');


const groupSchema = new Schema({
  _id : mongoose.Schema.Types.ObjectId,
  url: {
    type: String,
  },

  // not completed just for testing urls.. 
});

module.exports = model('Group', groupSchema);
