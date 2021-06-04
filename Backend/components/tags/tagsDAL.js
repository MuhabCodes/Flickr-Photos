const Tags = require('./tagsModel');
const Photo = require('../photo/photoModel');

module.exports.createTag = async function createTag(ownerId, tagRaw) {
  const tagObj = new Tags({
    ownerId,
    tagRaw,
    tagText: ((String)(tagRaw)).replace(/\s/g, ''), // removing all white space from tag,
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

module.exports.removeTagFromPhoto = async function removeTagFromPhoto(photoId, tagId) {
  await Photo.findById(photoId).update(
    {},
    { $pull: { tags: tagId } },
  );
};

module.exports.removeTagFromAllPhotos = async function removeTagFromAllPhotos(tagId) {
  const photoObj = await Photo.find().update(
    {},
    { $pull: { tags: tagId } },
    { multi: true },
  );
  return photoObj;
};

module.exports.removeTag = async function removeTag(tagId) {
  await Tags.findById(tagId).remove();
};

module.exports.getAllTags = async function getAllTags() {
  const tagObj = await Tags.find();
  return tagObj;
};

module.exports.getTagWithId = async function getTagWithId(tagId) {
  const tagObj = await Tags.findById(tagId);
  return tagObj;
};

module.exports.getTagFromPhoto = async function getTagFromPhoto(tagId, photoId) {
  const photoObj = await Photo.findById(photoId);
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < photoObj.tags.length; index++) {
    // eslint-disable-next-line eqeqeq
    if (tagId === photoObj.tags[index]) { return true; }
  }
  return false;
};
