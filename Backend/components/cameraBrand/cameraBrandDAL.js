const CameraBrand = require('./cameraBrandModel');

module.exports.createBrand = async function createBrand(brandName) {
  const checking = await CameraBrand.findOne({ name: brandName });
  if (checking === null) {
    const brandObj = new CameraBrand({
      name: brandName,
    });
    const brand = await brandObj.save();
    return brand;
  }
  return null;
};

module.exports.getAllBrands = async function getAllBrands() {
  const brandObj = await CameraBrand.find().select('name _id');
  return brandObj;
};

module.exports.getBrandWithName = async function getBrandWithName(brandName) {
  const brandObj = await CameraBrand.findOne({ name: brandName });
  return brandObj;
};
