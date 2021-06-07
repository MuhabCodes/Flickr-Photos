const { addPersonToPhotoDAL } = require('../photoDAL');

const addPersonToPhotoServ = async function addUserToPhoto(photoId, userId) {
  try {
    // photosinfo is an array of photos to be added to the server
    await addPersonToPhotoDAL(photoId, userId);
  } catch (err) {
    throw Error(JSON.stringify({ statusCode: 404, error: 'The client trying to access the server is unauthorized' }));
  }
};
module.exports = {
  addPersonToPhotoServ,
};
