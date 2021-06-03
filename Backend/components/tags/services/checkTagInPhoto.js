module.exports.getTagFromPhoto = function getTagFromPhoto(tagId, tagArr) {
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < tagArr.length; index++) {
    if ((String)(tagId) === (String)(tagArr[index])) { return true; }
  }
  return false;
};
