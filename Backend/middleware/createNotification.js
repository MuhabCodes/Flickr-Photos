const SaveNotification = require('../fire-base/saveNotification');

const Notification = require('../components/notification/notificationModel');
const { getPhotoById } = require('../components/photo/photoDAL');

const createLikeNotification = async (req, res) => {
  const { photoId } = req.params;

  try {
    const photo = await getPhotoById(photoId, res);
    let reciever; // photo_owenr
    if (photo) {
      reciever = photo.user._id;
    } else {
      return res.status(404).json({
        message: 'Photo Not Found',
        favoriteCreated: req.favoriteCreated,
      }); // this mean dont do anything if he doesnt find photo
    }
    console.log(reciever);
    const newNotification = new Notification({
    // sender: userId, // TODO
      reciever, // reciever.toString(),
      act: 'like',
      photoId,
      notificationDate: req.body.favoriteDate,
    });
    console.log('newNot', newNotification);
    // firebase dont allow ".", "#", "$", "/", "[", or "]" in keys
    const id = newNotification._id;
    const firebaseNotification = { // due to firebase constrictions
      reciever: newNotification.reciever.toString(),
      id: id.toString(),
      act: newNotification.act,
      photoId: newNotification.photoId.toString(),
      notificationDate: newNotification.notificationDate.toString(),
    };
    console.log('firebasenot', firebaseNotification);
    SaveNotification(firebaseNotification);

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
