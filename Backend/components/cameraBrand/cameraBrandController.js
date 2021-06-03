const cameraBrandDAL = require('./cameraBrandDAL');
const CameraBrand = require('./cameraBrandModel');

module.exports.createBrand = async function createBrand(req, res) {
  const { body } = req;
  try {
    // checking if there is  a brand already named like this
    const brandObj = await cameraBrandDAL.createBrand(body.name);
    if (!brandObj) {
      return res.status(404).json({
        message: `There is already a brand named like this ${body.name}`,
      });
    }
    return res.status(200).json(brandObj); //  else create the brand
  } catch (err) {
    return res.status(500).json({ // no connection to db
      error: err,
    });
  }
};

module.exports.getBrands = async function getBrands(req, res) {
  try {
    const brandObj = await CameraBrand.find();

    if (brandObj.length === 0) { // if no brands exists in db
      return res.status(404).json({
        message: 'could not find any brands',
      });
    }

    return res.status(200).json({
      cameras: brandObj,

    }); // else return the brands
  } catch (err) { // couldn't connect to db
    return res.status(500).json({
      error: err,
    });
  }
};

module.exports.getBrandWithName = async function getBrandWithName(req, res) {
  try {
    const brandObj = await cameraBrandDAL.getBrandWithName(req.params.brandName);
    if (!brandObj) { // if no brands exists in db
      return res.status(404).json({
        message: 'could not find any brands',
      });
    }
    return res.status(200).json({
      brandObj,
      noOfModels: brandObj.topModels.length,
    }); // else return the brands
  } catch (error) {
    return res.status(500).json(error); // couldn't connect to db
  }
};
