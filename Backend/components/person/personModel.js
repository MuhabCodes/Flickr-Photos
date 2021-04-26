const { Schema, model } = require('mongoose');



const personSchema = new Schema({
    personId:
    {type:mongoose.Schema.Types.ObjectId,
      ref:'Person',
      required:true
  },
  
user:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  birthDate:
  {type:Date,
   required:true


  },
  realName:
  {type:string,
   required:true   


  },
  dateCreated:
  {type:Date,
   required:true   


  }











  
});