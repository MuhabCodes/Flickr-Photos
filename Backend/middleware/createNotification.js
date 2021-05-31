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
