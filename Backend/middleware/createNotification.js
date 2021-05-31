async function SaveNotification(notification){
  var admin = require("firebase-admin");
  var serviceAccount = require("./serviceAccountKey.json");
  try{  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://notify-d4836-default-rtdb.firebaseio.com"
  });
  
  const FIREBASE_AUTH = admin.auth();
  const FIREBASE_MESSAGING = admin.messaging();
  const FIREBASE_DATABASE = admin.database();
  
  let ref = FIREBASE_DATABASE.ref("/notifications");

    let doc =await FIREBASE_DATABASE.ref('/notifications').push(notification)
    if (doc)
      return doc ;
  }catch(err){
    console.log(err);
  }
}
  




const Notification = require('../components/notification/notificationModel');
const { getPhotoById } = require('../components/photo/photoDAL');

const createLikeNotification = async (req, res) => {
  const { photoId } = req.params;

  try {
    const photo = await getPhotoById(photoId, res);
    let authorId;
    if (photo) {
      authorId = photo.authorId;
    } else {
      return res.status(404).json({
        message: 'Photo Not Found',
        favoriteCreated: req.favoriteCreated,
      }); // this mean dont do anything if he doesnt find photo
    }
    const newNotification = new Notification({
    // senderID: userId, // TODO
      recieverID: authorId,
      act: 'like',
      photoId,
      notificationDate: req.body.favoriteDate,
    });
    console.log(newNotification);
        
    const notification2 = {
      message: "node",
      user:"node;",
      userProfileImg:"node",
    }
    SaveNotification(notification2);

    return res.status(201).json({
      message: 'Favorite added succesfully',
      favoriteCreated: req.favoriteCreated,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    }); 
  }
};

module.exports = {
  createLikeNotification,
};
