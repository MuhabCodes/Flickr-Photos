const Tags = require('./tagsModel');
const Photo = require('../photo/photoModel');

module.exports.createTag = async function createTag({ ownerId, tagRaw, tagText }) {
  const tagObj = new Tags({
    ownerId,
    tagRaw,
    tagText,
  });
  const tag = await tagObj.save();
  return tag;
};

module.exports.getUserTag = async function getUserTag(userId) {
  // get all tags where the creator of the tag is the userid
  const tagObj = await Tags.find({ ownerId: userId });
  return tagObj;
};

// find tag with this text
module.exports.getTag = async function getTag(tagRaw) {
  const tagObj = await Tags.findOne({ tagRaw });
  return tagObj;
};

// populate the photo with the tag
module.exports.addTagToPhoto = async function addTagToPhoto(photoId, tagObj) {
  const photoObj = await Photo.findById(photoId);

  photoObj.tags.push(tagObj._id);
  photoObj.save();
  return photoObj;
};

module.exports.findPhotoWithTags = async function findPhotoWithTags(photoId) {
  const photoObj = await Photo.findById(photoId).populate('tags');

  return photoObj;
};
