const { addNewAlbum } = require('../albumDAL');

const createNewAlbum = async (albumInfo, res) => {
  try {
    await addNewAlbum(albumInfo);
    return res.json({ statusCode: 201 });
  } catch (err) {
    return res.json({ error: err.message, statusCode: 500 });
  }
};

module.exports = {
  createNewAlbum,
};
