const SaveNotification = require('../fire-base/saveNotification');
const Notification = require('../components/notification/notificationModel');
const { getPhotoById } = require('../components/photo/photoDAL');
const { getUserById } = require('../components/user/userDAL');

const createLikeNotification = async (req, res) => {
  const { photoId } = req.params;
  const { favoriteCreated } = req;

  try {
    const photo = await getPhotoById(photoId, res);
    let reciever; // photo_owenr
    if (photo) {
      reciever = photo.user._id;
    } else {
      return res.status(404).json({
        message: 'Photo Not Found',
        favoriteCreated,
      }); // this mean dont do anything if he doesnt find photo
    }
    const recieverInfo = await getUserById(reciever);
    const senderInfo = await getUserById(req.userId);
    let senderName = senderInfo.displayName;
    let recieverName = recieverInfo.displayName;
    const newNotification = new Notification({
      sender: req.userId,
      senderName,
      reciever, // reciever.toString()
      recieverName,
      act: 'like',
      photoId,
      notificationDate: req.body.favoriteDate,
      imageUrl: photo.imageUrl,
    });

    // firebase dont allow ".", "#", "$", "/", "[", or "]" in keys

    // since firebase dont allow undefined values and throw errors
    senderName = senderName === undefined ? null : senderName;
    recieverName = recieverName === undefined ? null : recieverName;

    const id = newNotification._id;
    const firebaseNotification = { // due to firebase constrictions
      sender: newNotification.sender.toString(),
      senderName,
      reciever: newNotification.reciever.toString(),
      recieverName,
      id: id.toString(),
      act: newNotification.act,
      photoId: newNotification.photoId.toString(),
      notificationDate: req.body.favoriteDate.toString(),
      imageUrl: photo.imageUrl.toString(),
    };
    await SaveNotification(firebaseNotification);
    return res.status(201).json({
      message: 'Favorite added succesfully',
      favoriteCreated,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

const createCommentNotification = async (req, res) => {
  try {
    const { commentCreated } = req;

    const reciever = req.photoFound.user; // photo_owner
    const recieverInfo = await getUserById(reciever);
    const senderInfo = await getUserById(req.userId);
    let senderName = senderInfo.displayName;
    let recieverName = recieverInfo.displayName;

    const newNotification = new Notification({
      sender: req.userId,
      reciever, // reciever.toString()
      act: 'comment',
      photoId: req.photoFound._id,
      notificationDate: commentCreated.dateCreated,
      recieverName,
      imageUrl: req.photoFound.imageUrl,
      senderName,
    });
    // firebase dont allow ".", "#", "$", "/", "[", or "]" in keys
    const id = newNotification._id;
    // since firebase dont allow undefined values and throw errors
    senderName = senderName === undefined ? null : senderName;
    recieverName = recieverName === undefined ? null : recieverName;

    const firebaseNotification = { // due to firebase constrictions
      sender: newNotification.sender.toString(),
      reciever: newNotification.reciever.toString(),
      recieverName,
      senderName,
      imageUrl: req.photoFound.imageUrl,
      id: id.toString(),
      act: newNotification.act,
      photoId: newNotification.photoId.toString(),
      notificationDate: newNotification.notificationDate.toString(),
    };

    await SaveNotification(firebaseNotification);
    return res.status(201).json({
      message: 'comment added succesfully',
      commentCreated,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createLikeNotification, createCommentNotification,
};
