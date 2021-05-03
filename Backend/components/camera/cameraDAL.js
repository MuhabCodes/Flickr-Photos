const Camera = require('./cameraModel');

module.exports.addCamera = async function addCamera({
  name, brandId,
// storageType, imageUrl, megaPixels, zoom,
}) {
  const cameraObj = new Camera({
    name,
    brandId,
    // storageType,
    // imageUrl,
    // megaPixels,
    // zoom,
  });
  const cameras = await cameraObj.save();
  return cameras;
};
