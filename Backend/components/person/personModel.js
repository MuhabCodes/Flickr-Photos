const { Schema, model } = require('mongoose');

const personSchema = new Schema({
  personId: {
    type: Schema.Types.ObjectId,
  },
  birthdate: {
    type: String,
    // TODO: add required or not
  },
  dateCreated: {
    type: String,
  },
  realName: {
    type: String,
  },
},
{ autoCreate: true });

module.exports = model('Person', personSchema);
