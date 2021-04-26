const { Schema, model } = require('mongoose');
const photosSchema = new Schema({

    photoId:{ 
        type:mongoose.Schema.Types.ObjectId,
        required:true
      }
    
    
    })


    module.exports = model('Photo', photosSchema);