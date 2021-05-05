const groupDAL = require('./groupDAL');
const UserDAL = require('../User/userDAL');

require('dotenv').config();
const { decryptAuthToken } = require('../auth/Services/decryptToken');

exports.createGroup = async function createNewGroup(req, res) {
  const { body } = req;
  const { authorization } = req.headers; // get auth from headers
  try {
    const currentUser = await decryptAuthToken(authorization); // get value from token
    if (currentUser.length === 0) { // check whether token contains information or not
      return res.status(403).json({
        message: ' You are not logged in ',
      });
    }
    const groupObj = await groupDAL.createGroup({
      name: body.name,
      ownerId: currentUser.userId,
      isPublic: body.isPublic,
      plusEighteen: body.plusEighteen,
      requiresInvitation: body.requiresInvitation,
    });
    // pushes the group id to user
    const userObj = await UserDAL.addGroupToUser(currentUser.userId, groupObj._id);

    return res.status(201).json({ // on success should return this
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

exports.getAllGroups = async function getAllGroups(req, res) {
  try {
    const groupObj = await groupDAL.getAllGroup();
    if (groupObj.length === 0) { // check whether DB has any groups or not
      return res.status(404).json({
        message: ' No groups Found',
      });
    }

    return res.status(200).json(groupObj);
  } catch (error) {
    return res.status(500).json(error); // couldn't connect to DB
  }
};
