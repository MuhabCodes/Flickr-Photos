const cameraDAL = require('./cameraDAL');
const camerBrandDAL = require('../cameraBrand/cameraBrandDAL');
// assuming that the brandName would be given in the body of the request
module.exports.addCamera = async function addCamera(req, res) {
  const { body } = req;
  try {
    const brandObj = await camerBrandDAL.getBrandWithName(body.brandName);

    if (!brandObj) {
      return res.status(404).json({
        message: "couldn't find brand with this name",
      });
    }
    const checkCam = await cameraDAL.getModelWithName(body.name);
    if (checkCam) {
      return res.status(403).json({
        message: 'There is already a model with this name',
      });
    }

    const cameraObj = await cameraDAL.addCamera({
      name: body.name,
      brandName: body.brandName,

    });

    return res.status(200).json(cameraObj);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

module.exports.getBrandModels = async function getBrandModels(req, res) {
  const { params } = req;
  try {
    const cameraModels = await cameraDAL.getBrandModels(params.brand);

    return res.status(200).json({
      cameraModels,
      noOfModels: cameraModels.length,
    });
  } catch (err) {
    return res.status(500).json({
      message: "couldn't connect to db",
      error: err,
    });
  }
};
