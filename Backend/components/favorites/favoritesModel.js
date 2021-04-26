const DateFromTime = require('es-abstract/5/datefromtime');
const { Schema, model } = require('mongoose');



const favoritesSchema = new Schema({

userId:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },

displayName:{
    type:String,
    ref:'User'
   
},

photo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Photo',
    required:true



},

favoriteDate:{type:Date,
              required:true



}




  
});

module.exports = model('Favorites', favoritesSchema);