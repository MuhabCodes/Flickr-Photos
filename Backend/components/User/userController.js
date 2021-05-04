const User = require('./userModel');
const userDAL = require('./userDAL');

exports.getUserbyDisplayName = async function getWithDisplayName(req, res) {
  const { displayName } = req.params;
  try {
    // TODO: this should be moved to DAL
    const userObj = await User.findOne({ displayName });

    return res.status(200).json(userObj);
    // TODO :userName : connection between user and people
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

exports.getUserByEmail = async function getWithEmail(req, res) {
  const { email } = req.params;
  try {
    const userObj = await User.findOne({ email });
    return res.status(200).json({
      userObj,

      // TODO :userName : connection between user and people
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

exports.getUserInfoById = async function getUserInfoById(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getUserById(params.userId);
    return res.status(200).json(userObj);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getGroups = async function getGroupps(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getUserGroupsById(params.userId);
    return res.status(200).json(userObj.groups);
  } catch (error) {
    return res.status(500).json(error);
  }
};
