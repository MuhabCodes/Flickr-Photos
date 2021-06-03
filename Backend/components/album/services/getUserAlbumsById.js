const { fetchUserAlbums } = require('../albumDAL');

const getUserAlbumsById = async (authorId, res) => {
  try {
    const foundAlbums = await fetchUserAlbums(authorId);
    return res.json({ albums: foundAlbums });
  } catch (err) {
    return res.json({ error: err.message, statusCode: 404 });
  }
};

module.exports = {
  getUserAlbumsById,
};
