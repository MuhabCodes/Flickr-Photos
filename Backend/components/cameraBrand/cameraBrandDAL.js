const Brand = require('./cameraBrandModel');

module.exports.createBrand = async function createBrand(name) {
  const brandObj = new Brand({
    name,
  });
  const brand = await brandObj.save();
  return brand;
};
