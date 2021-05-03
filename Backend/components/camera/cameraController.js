const cameraDAL = require('./cameraDAL');

// assuming that the brandId would be given in the body of the request
module.exports.AddCamera = async function AddCamera(req, res) {
  const { body } = req;

  try {
    const cameraObj = await cameraDAL.addCamera({
      name: body.name,
      brandId: body.brandId,
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
