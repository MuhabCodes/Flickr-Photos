const { addNewPhotos } = require('../photoDAL');

const addNew = async (photosInfo, res) => {
  try {
    // photosinfo is an array of photos to be added to the server
    await addNewPhotos(photosInfo);
    return res.json({ statusCode: 201 });
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = {
  addNew,
};
