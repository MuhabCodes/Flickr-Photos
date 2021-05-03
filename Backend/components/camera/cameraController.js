const cameraDAL = require('./cameraDAL');
const camerBrandDAL = require('../cameraBrand/cameraBrandDAL');

// assuming that the brandName would be given in the body of the request
module.exports.AddCamera = async function AddCamera(req, res) {
  const { body } = req;

  const brandObj = await camerBrandDAL.getBrandWithName(body.brandName);

  if (!brandObj) {
    return res.status(404).json({
      message: "couldn't find brand with this name",
    });
  }

  try {
    const cameraObj = await cameraDAL.addCamera({
      name: body.name,
      brandName: body.brandName,
    //   storageType: body.storageType,
    //   imageUrl: body.imageUrl,
    //   megaPixels: body.megaPixels,
    //   zoom: body.zoom,
    });
    return res.status(200).json(cameraObj);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
