const groupDAL = require('./groupDAL');
const UserDAL = require('../User/userDAL');
const User = require('../User/userModel');
require('dotenv').config();
const { decryptAuthToken } = require('../auth/Services/decryptToken');

exports.createGroup = async function createNewGroup(req, res) {
  const { body } = req;
  const { authorization } = req.headers;
  // console.log(req.body);
  try {
    const currentUser = await decryptAuthToken(authorization);
    console.log(currentUser);
    const groupObj = await groupDAL.createGroup({
      name: body.name,
      ownerId: currentUser.userId,
      isPublic: body.isPublic,
      plusEighteen: body.plusEighteen,
      requiresInvitation: body.requiresInvitation,
    });
    // eslint-disable-next-line no-underscore-dangle
    const userObj = await UserDAL.addGroupToUser(currentUser.userId, groupObj._id);

    // eslint-disable-next-line no-underscore-dangle

    return res.status(201).json({
      groupObj,
      userObj,
    });
  } catch (err) {
    return res.status(500).json({
      message: "couldn't access db",
      error: err,
    });
  }
};
// 608ec98754b9193a84bf9750
