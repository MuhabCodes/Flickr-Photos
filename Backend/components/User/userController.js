const User = require('./userModel');

exports.getUserbyDisplayName = async function getWithDisplayName(req,res){
    const displayName = req.params.displayName
    try {
        //TODO: this should be moved to DAL
        const userObj = await User.findOne({displayName})

        return res.status(200).json(userObj
          //TODO :userName : connection between user and people
        )
     } catch (err) {
       return res.status(500).json({
         error : err
       })
     }
}


  