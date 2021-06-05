const { addNewPhoto } = require('../photoDAL');
const Photo = require('../photoModel');
const { addTag } = require('../../tags/services/addTag');

const addNew = async (photoInfo, photoPath, res) => {
  try {
    // change the location attribute in the photoInfo
    photoInfo.imageUrl = photoPath;
    const newTags = [];
    photoInfo.tags.forEach((tag) => {
      newTags.push(addTag(tag, photoInfo.user));
    });
    photoInfo.tags = newTags;
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
