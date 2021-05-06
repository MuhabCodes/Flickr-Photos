const Gallery = require('./galleryModel');

module.exports.findGalleryById = async (id) => {
  const gallery = await Gallery.findById(id).exec();
  return gallery;
};
