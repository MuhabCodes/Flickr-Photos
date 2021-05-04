const { ObjectId } = require('mongoose').Types;
require('./personModel');
const personDAL = require('./personDAL');

exports.getProfile = async function getProfile(req, res) {
  const user = req.params.userId;
  const toId = ObjectId(user);
  try {
    const profileOutput = await personDAL.findProfile(toId);
    return res.status(200).json(
      profileOutput.person,
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
