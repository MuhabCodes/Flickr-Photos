const { addNewPhoto } = require('../photoDAL');

const addNew = async (photoInfo, res) => {
  await addNewPhoto(photoInfo);
  res.json({ statusCode: 201 });
};
module.exports = {
  addNew,
};
