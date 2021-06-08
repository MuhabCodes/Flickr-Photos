const { getPeopleInPhotoDAL } = require('../photoDAL');

const getPeopleInPhotoServ = async function addUserToPhoto(photoId) {
  try {
    // photosinfo is an array of photos to be added to the server
    return await getPeopleInPhotoDAL(photoId);
  } catch (err) {
    throw Error(JSON.stringify({ statusCode: 404, error: 'The client trying to access the server is unauthorized' }));
  }
};
module.exports = {
  getPeopleInPhotoServ,
};
