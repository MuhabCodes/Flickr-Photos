const { addNewPhoto } = require('../photoDAL');
const Photo = require('../photoModel');

const addNew = async (photoInfo, photoPath, res) => {
  try {
    // change the location attribute in the photoInfo
    photoInfo.imageUrl = photoPath;
    const newPhoto = new Photo(photoInfo);
    await addNewPhoto(newPhoto);
    return res.json({ statusCode: 201 });
  } catch (err) {
    return res.json({ error: err, statusCode: 500 });
  }
};
module.exports = {
  addNew,
};
