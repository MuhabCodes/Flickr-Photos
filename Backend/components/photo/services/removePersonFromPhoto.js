const { removePersonFromPhotoDAL } = require('../photoDAL');

const removePersonFromPhotoServ = async function addUserToPhoto(photoId, userId) {
  try {
    // photosinfo is an array of photos to be added to the server
    await removePersonFromPhotoDAL(photoId, userId);
  } catch (err) {
    throw Error(JSON.stringify({ statusCode: 404, error: 'The client trying to access the server is unauthorized' }));
  }
};
module.exports = {
  removePersonFromPhotoServ,
};
