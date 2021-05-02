const cameraBrandDAL = require('./cameraBrandDAL');

module.exports.createBrand = async function createBrand(req, res) {
  const { body } = req;
  try {
    const brandObj = await cameraBrandDAL.createBrand(body.name);
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
