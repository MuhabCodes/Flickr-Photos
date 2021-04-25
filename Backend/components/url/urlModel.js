const { Schema, model } = require('mongoose');


const urlSchema =new Schema({
    url : {type : string}
});


module.exports = mongoose.model('Url',urlSchema);
