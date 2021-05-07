const { addNewPhoto } = require('../photoDAL');

const addNew = async (photoInfo, res) => {
  try {
    await addNewPhoto(photoInfo);
    return res.json({ statusCode: 201 });
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = {
  addNew,
};
