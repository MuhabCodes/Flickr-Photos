const { addNewPhoto } = require('../photoDAL');
const Photo = require('../photoModel');
const { addTag } = require('../../tags/services/addTag');

const addNew = async (photoInfo, photoPath, res) => {
  try {
    // change the location attribute in the photoInfo
    // eslint-disable-next-line no-param-reassign
    photoInfo.imageUrl = photoPath;

    const newPhoto = new Photo(photoInfo);
    await addNewPhoto(newPhoto);

    await photoInfo.tags.forEach(async (tag) => {
      await addTag(tag, photoInfo.user);
      // console.log(newTag);
      // newTags.push(newTag);
    });
    return res.json({ statusCode: 201 });
  } catch (err) {
    return res.json({ error: err, statusCode: 500 });
  }
};
module.exports = {
  addNew,
};
