const { addNewPhoto } = require('../photoDAL');

const addNew = async (photoInfo, photoName, res) => {
  try {
    // change the location attribute in the photoInfo
    photoInfo.imageUrl = `./public/uploads/${photoName}`;
    await addNewPhoto(photoInfo);
    return res.json({ statusCode: 201 });
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = {
  addNew,
};
