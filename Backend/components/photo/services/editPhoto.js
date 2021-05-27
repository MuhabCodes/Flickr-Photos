const { getPhotoById, savePhoto } = require('../photoDAL');

const editPhoto = async (photoId, newPhotoInfo, res) => {
  try {
    const photo = await getPhotoById(photoId);
    if (newPhotoInfo) {
      photo.description = newPhotoInfo.description ? newPhotoInfo.description : photo.description;
      photo.captureDate = newPhotoInfo.captureDate ? newPhotoInfo.captureDate : photo.captureDate;
      photo.uploadDate = newPhotoInfo.uploadDate ? newPhotoInfo.uploadDate : photo.uploadDate;
      photo.views = newPhotoInfo.views ? newPhotoInfo.views : photo.views;
      photo.secret = newPhotoInfo.secret ? newPhotoInfo.secret : photo.secret;
      photo.title = newPhotoInfo.title ? newPhotoInfo.title : photo.title;
      photo.imageUrl = newPhotoInfo.imageUrl ? newPhotoInfo.imageUrl : photo.imageUrl;
      photo.width = newPhotoInfo.width ? newPhotoInfo.width : photo.width;
      photo.height = newPhotoInfo.height ? newPhotoInfo.height : photo.height;
    }
    photo._id = photoId;
    await savePhoto(photo);
    return res.json({ statusCode: 200 });
  } catch (err) {
    return res.json({ statusCode: 404, error: 'PhotoNotFound' });
  }
};
module.exports = {
  editPhoto,
};
