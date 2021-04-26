const User = require('./userModel');
const userDAL = require('./userDAL')

exports.getUserbyDisplayName = async function getWithDisplayName(req,res){
    const userName = req.params.userName
    
    try {
        const userObj = await User.findOne({userName})

        return res.status(200).json(userObj
          //TODO :userName : connection between user and people
        )
     } catch (err) {
       return res.status(500).json({
         error : err
       })
     }
}

exports.getUserByEmail = async function getWithEmail(req,res) {
    const email =req.params.email
    try {
      const userObj = await User.findOne({email})
      return res.status(200).json({userObj
        
        //TODO :userName : connection between user and people
      })
    } catch (err) {
      return status(500).json({
        error : err
      })
    }
    
}

exports.getAllUsers = async function getAll(req,res){  
   
   
    try {
        const Users = await User.find().select('_id userName')
        //Users.select('_id userName')
        return res.status(200).json(Users)
        
    } catch (err) {
            console.log(err);
            res.status(500).json({error : err})
    }

      
}
  