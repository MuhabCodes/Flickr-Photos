const mongoose = require('mongoose');

const personDAL = require('./personDAL');
const userDAL = require('../user/userDAL');
const { decryptAuthToken } = require('../auth/services/decryptToken');

exports.getProfile = async function getProfile(req, res) {
  const user = req.params.userId;

  try {
    if (!mongoose.isValidObjectId(user)) {
      return res.status(404).json({
        error: 'Invalid userId',
      });
    }
    const profileOutput = await personDAL.findProfile(user);
    return res.status(200).json(
      profileOutput.personId,
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

module.exports.updateProfile = async function updateProfile(req, res) {
  const { body, params } = req;
  const { authorization } = req.headers;
  try {
    const currentUser = await decryptAuthToken(authorization);

    if (currentUser == null || currentUser.userId !== params.userId) {
      return res.status(403).json({
        message: 'You are not authorized to change Data',
      });
    }
    const user = await userDAL.getPersonId(params.userId);
    await personDAL.updateInfo(user.personId, body);
    return res.status(200).json({
      message: 'data updated successfully',
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
