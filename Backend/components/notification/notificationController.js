const getNotifications = require('../../fire-base/getNotifications');
const mongoose = require('mongoose');
const { decryptAuthToken } = require('../auth/Services/decryptToken');


 exports.getMyNotifications=async (req,res)=>{

    const { authorization } = req.headers;
    const { userId } = await decryptAuthToken(authorization);
    
    if (!mongoose.isValidObjectId(userId)) {
        return res.status(404).json({
          error: 'Invalid userId',
        });
    }
    try{
        const myNotifications = await getNotifications(userId);
            let i=0; 
            let myNotificationsarray= [];
            // since notifications all return in{ {},{},{} } shape 
            // so i loop over them and destructing each not in array
            while(myNotifications &&
            myNotifications[Object.keys(myNotifications)[i]]!==undefined){
                myNotificationsarray[i]=(myNotifications[Object.keys(myNotifications)[i]]);
                i++ ;
            }
            return res.status(200).send({ statusCode: 200, myNotificationsarray });
            
    }
    catch(err){
        return res.status(500).json({
            error: err,
          });
    }
}