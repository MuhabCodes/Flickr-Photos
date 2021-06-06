const { fetchFollowerPhotos } = require('../photoDAL');

const getFollowerPhotos = async (userIds, page) => {
  try {
    return fetchFollowerPhotos(userIds, page);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getFollowerPhotos,
};
