const mongoose = require('mongoose');
require('./personModel');
const personDAL = require('./personDAL');

exports.getProfile = async function getProfile(req, res) {
  const user = req.params.userId;
  // const toId = ObjectId(user);
  try {
    if (!mongoose.isValidObjectId(user)) {
      return res.status(404).json({
        error: 'Invalid userId',
      });
    }
    const profileOutput = await personDAL.findProfile(user);
    return res.status(200).json(
      profileOutput.person,
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
