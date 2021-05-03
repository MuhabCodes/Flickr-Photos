const cameraBrandDAL = require('./cameraBrandDAL');

module.exports.createBrand = async function createBrand(req, res) {
  const { body } = req;
  try {
    const brandObj = await cameraBrandDAL.createBrand(body.name);
    if (!brandObj) {
      return res.status(404).json({
        message: `There is already a brand named like this ${body.name}`,
      });
    }
    return res.status(200).json(brandObj);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

module.exports.getBrands = async function getBrands(req, res) {
  try {
    const brandObj = await cameraBrandDAL.getAllBrands();
    return res.status(200).json({
      brands: [brandObj],
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
module.exports.getBrandWithName = async function getBrandWithName(req, res) {
  try {
    const brandObj = await cameraBrandDAL.getBrandWithName(req.params.brandName);
    return res.status(200).json(brandObj);
  } catch (error) {
    return res.status(404).json(error);
  }
};
