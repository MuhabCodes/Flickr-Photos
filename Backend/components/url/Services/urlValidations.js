const Group = require('../../Group/groupModel');
const User = require('../../User/userModel');
const Gallery = require('../../Gallery/galleryModel');

module.exports.findGroupById = async (id) => {
  const group = await Group.findById(id).exec();
  return group;
};

module.exports.findUserById = async (id) => {
  const user = await User.findById(id).exec();
  return user;
};

module.exports.findGalleryById = async (id) => {
  const gallery = await Gallery.findById(id).exec();
  return gallery;
};
