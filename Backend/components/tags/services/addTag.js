const tagsDAL = require('../tagsDAL');

module.exports.addTag = async function addTag(tag, userId) {
  try {
    const checkTag = await tagsDAL.getTag(tag);
    if (checkTag == null) { // if i don't have any tag with this name
      const tagObj = await tagsDAL.createTag({
        ownerId: userId,
        tagRaw: tag,
        tagText: ((String)(tag)).replace(/\s/g, ''), // removing all white space from tag
      });
      // return _id so that it can be added to the photo
      return tagObj._id;
    }
    // return the existing tag id
    return checkTag._id;
  } catch (error) {
    return 0;
  }
};
