const { Schema, model } = require('mongoose');



const profileSchema = new Schema({

user:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  person:
  {type:mongoose.Schema.Types.ObjectId,
    ref:'Person',
    required:true
}







  
});