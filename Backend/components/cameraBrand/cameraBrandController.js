const cameraBrandDAL = require('./cameraBrandDAL');

module.exports.createBrand = async function createBrand(req, res) {
  const { body } = req;
  console.log(body);
  try {
    const brandObj = await cameraBrandDAL.createBrand(body.name);
    return res.status(200).json(brandObj);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
