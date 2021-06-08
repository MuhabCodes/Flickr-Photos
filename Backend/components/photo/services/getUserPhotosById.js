const { fetchUserPhotos } = require('../photoDAL');

const getUserPhotosById = async (userId, res) => {
  try {
    const foundPhotos = await fetchUserPhotos(userId);
    return res.json({ photos: foundPhotos });
  } catch (err) {
    return res.json({ error: err.message, statusCode: 404 });
  }
};

module.exports = {
  getUserPhotosById,
};
