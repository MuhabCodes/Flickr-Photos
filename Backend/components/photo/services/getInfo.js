const { getPhotoById } = require('../photoDAL');

const getInfo = async (photoId, res) => {
  try {
    const photo = await getPhotoById(photoId);
    return res.json({
      authorId: photo.user._id,
      title: photo.title,
      description: photo.description,
      captureDate: photo.captureDate,
      uploadDate: photo.uploadDate,
      isPublic: photo.isPublic,
      secret: photo.secret,
      views: photo.views,
      favorites: photo.isPublic, // do the logic when the database is ready
      inPhoto: photo.inPhoto,
      tags: photo.tags,
      cameraName: 'Camera name', // add the logic to get the camera name
      statusCode: 200,
      width: photo.width,
      height: photo.height,
    });
  } catch (err) {
    return res.json({ statusCode: 404, error: 'PhotoNotFound' });
  }
};
module.exports = {
  getInfo,
};
