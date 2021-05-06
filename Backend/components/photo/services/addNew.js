const { addNewPhoto } = require('../photoDAL');

const addNew = async (photoInfo, res) => {
  await addNewPhoto(photoInfo);
  res.json({ statusCode: 200 });
};
module.exports = {
  addNew,
};
