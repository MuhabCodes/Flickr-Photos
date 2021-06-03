const Camera = require('./cameraModel');
const cameraBrandModel = require('../cameraBrand/cameraBrandModel');

module.exports.addCamera = async function addCamera({
  name, brandName,
// storageType, imageUrl, megaPixels, zoom,
}) {
  const cameraObj = new Camera({
    name,
    brandName,
    // storageType,
    // imageUrl,
    // megaPixels,
    // zoom,
  });
  const cameras = await cameraObj.save();
  const cameraBrand = await cameraBrandModel.find({ name: brandName });
  cameraBrand.topModels.push(name); // add this model to the brand
  cameraBrand.save();

  return cameras;
};

module.exports.getBrandModels = async function getBrandModels(brand) {
  const brandObj = await Camera.find({ brandName: brand });
  return brandObj;
};

module.exports.getModelWithName = async function getModelWithName(modelName) {
  const camera = await Camera.findOne({ name: modelName });
  return camera;
};
