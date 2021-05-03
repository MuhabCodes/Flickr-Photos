const CameraBrand = require('./cameraBrandModel');

module.exports.createBrand = async function createBrand(name) {
  const brandObj = new CameraBrand({
    name,
  });
  const brand = await brandObj.save();
  return brand;
};

module.exports.getAllBrands = async function getAllBrands() {
  const brandObj = await CameraBrand.find().select('name _id');
  return brandObj;
};

module.exports.getBrandWithName = async function getBrandWithName(brandName) {
  const brandObj = await CameraBrand.findOne({ name: brandName });
  return brandObj;
};
