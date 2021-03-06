const SaveNotification = require('../fire-base/saveNotification');
const Notification = require('../components/notification/notificationModel');
const { getPhotoById } = require('../components/photo/photoDAL');
const { getUserById } = require('../components/user/userDAL');
const SendNotificationToUser = require('../fire-base/sendNotification');

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
    if (req.userId.toString() !== reciever.toString()) {
      // just checking sender != reciever as we cant notify that you liked yourself
      let senderName = senderInfo.displayName;
      let recieverName = recieverInfo.displayName;
      const newNotification = new Notification({
        sender: req.userId,
        senderName,
        reciever, // reciever.toString()
        recieverName,
        act: 'like',
        photoId,
        notificationDate: favoriteCreated.favoriteDate,
        imageUrl: photo.imageUrl,
        senderImageUrl: senderInfo.userAvatar,
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
        notificationDate: newNotification.notificationDate.toString(),
        imageUrl: photo.imageUrl.toString(),
        senderImageUrl: senderInfo.userAvatar.toString(),
      };
      await SaveNotification(firebaseNotification); // saving notification in database
      await SendNotificationToUser(firebaseNotification); // this make push up
    // notification if the user is live only
    }
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
    if (reciever.toString() !== req.userId.toString()) {
      // just checking sender != reciever as we cant notify that you liked yourself
      const newNotification = new Notification({
        sender: req.userId,
        reciever, // reciever.toString()
        act: 'comment',
        photoId: req.photoFound._id,
        notificationDate: commentCreated.dateCreated,
        recieverName,
        imageUrl: req.photoFound.imageUrl,
        senderName,
        senderImageUrl: senderInfo.userAvatar,
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
        senderImageUrl: senderInfo.userAvatar.toString(),
      };
      await SaveNotification(firebaseNotification); // saving notification in database
      await SendNotificationToUser(firebaseNotification); // this make push up
    // notification if the user is live only
    }
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

const createFollowNotification = async (req, res) => {
  try {
    const reciever = req.body.userId; // contain person to be followed -> reciever
    const recieverInfo = await getUserById(reciever);
    const senderInfo = req.sender; // as i forwarded it
    let senderName = senderInfo.displayName;
    let recieverName = recieverInfo.displayName;
    if (reciever.toString() !== senderInfo._id.toString()) {
      // just checking sender != reciever as we cant notify that you liked yourself

      const newNotification = new Notification({
        sender: senderInfo._id,
        reciever, // reciever.toString()
        act: 'follow',
        notificationDate: Date.now(),
        recieverName,
        senderName,
        senderImageUrl: senderInfo.userAvatar,
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
        id: id.toString(),
        act: newNotification.act,
        notificationDate: newNotification.notificationDate.toString(),
        senderImageUrl: senderInfo.userAvatar.toString(),
      };
      await SaveNotification(firebaseNotification); // saving notification in database
      await SendNotificationToUser(firebaseNotification); // this make push up
    // notification if the user is live only
    }
    return res.status(200).json(senderInfo);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  createLikeNotification, createCommentNotification, createFollowNotification,
};
