const userDAL = require('./userDAL');
const { decryptAuthToken } = require('../auth/Services/decryptToken');
const { checkFollowing } = require('./Services/checkFollow');

exports.getUserbyDisplayName = async function getWithDisplayName(req, res) {
  const { displayName } = req.params;
  try {
    // call getUser by display name from DAL
    // TODO: might be changed to userName won't change alot
    const userObj = await userDAL.getUserByDisplayName(displayName);
    if (userObj.length === 0) // checking whether response is empty or not
    {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    return res.status(200).json(userObj); // else returns user
  } catch (err) {
    return res.status(500).json({ // returns 500 if it couldn't access db
      error: err,
    });
  }
};

exports.getUserByEmail = async function getWithEmail(req, res) {
  const { email } = req.params;
  try {
    const userObj = await userDAL.getUserByEmail(email);
    if (userObj.length === 0) // checking whether response is empty or not
    {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    return res.status(200).json({ // else returns user
      userObj,

    });
  } catch (err) {
    return res.status(500).json({ // returns 500 if it couldn't access db
      error: err,
    });
  }
};

exports.addDescription = async function addDescription(req, res) {
  const { body, params } = req;
  const { authorization } = req.headers;
  try {
    const userObj = await userDAL.getUserById(params.userId);
    const currentUser = await decryptAuthToken(authorization);
    console.log(currentUser);
    console.log(userObj._id);
    if ((String)(currentUser.userId) !== (String)(userObj._id)) { // check whether token contains information or not
      return res.status(403).json({
        message: ' You are not logged in ',
      });
    }
    await userDAL.addDescription(params.userId, body.description);
    return res.status(200).json({
      message: 'added description',
      description: userObj.description,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getUserInfoById = async function getUserInfoById(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getUserById(params.userId);
    if (userObj.length === 0) // checking whether response is empty or not
    {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    const userPhotos = await userDAL.getPhotos(params.userId);
    return res.status(200).json({
      userId: userObj._id,
      followersCount: userObj.followers.length,
      followingCount: userObj.following.length,
      followers: userObj.followers,
      following: userObj.following,
      isActivated: userObj.isActivated,
      isPro: userObj.isPro,
      albums: userObj.albums,
      email: userObj.email,
      displayName: userObj.displayName,
      photos: userPhotos,
      photosCount: userPhotos.length,
      description: userObj.description,

    });
  } catch (error) {
    return res.status(500).json(error); // returns 500 if it couldn't access db
  }
};

exports.getGroups = async function getGroupps(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getUserGroupsById(params.userId);
    if (userObj.length === 0) // checking whether response is empty or not
    {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    return res.status(200).json(userObj.groups);
  } catch (error) {
    return res.status(500).json(error); // returns 500 if it couldn't access db
  }
};

exports.getPhotos = async function getPhotos(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getPhotos(params.userId);
    if (userObj.length === 0) // checking whether response is empty or not
    {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    return res.status(200).json(userObj);
  } catch (error) {
    return res.status(500).json(error); // returns 500 if it couldn't access db
  }
};

exports.followUser = async function followUser(req, res) {
  const { body } = req;
  const { authorization } = req.headers;
  try {
    const currentUser = await decryptAuthToken(authorization);
    if (currentUser == null) { // check whether token contains information or not
      return res.status(403).json({
        message: ' You are not logged in ',
      });
    }
    const userObj = await userDAL.getUserById(currentUser.userId);
    const isFollowing = checkFollowing(userObj.following, body.userId);

    if (isFollowing) {
      return res.status(403).json({
        message: 'You are already following the user',
      });
    }

    // add the userid to the following array of the calling user
    await userDAL.addPersonToFollowing(currentUser.userId, body.userId);

    // increase the followers of the user
    await userDAL.addPersonToFollowers(body.userId, currentUser.userId);

    return res.status(200).json(userObj);
  } catch (error) {
    return res.status(500).json(error);
  }
};
