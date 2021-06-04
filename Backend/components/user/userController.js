const userDAL = require('./userDAL');
const { decryptAuthToken, decryptProToken } = require('../auth/Services/decryptToken');
const { sendProEmail } = require('../auth/Services/sendEmail');
const { checkFollowing } = require('./Services/checkFollow');
const tagDAL = require('../tags/tagsDAL');
const favouriteDAL = require('../favorites/favoritesDAL');

exports.getUserbyDisplayName = async function getWithDisplayName(req, res) {
  const { displayName } = req.params;
  try {
    // call getUser by display name from DAL
    // TODO: might be changed to userName won't change alot
    const userObj = await userDAL.getUserByDisplayName(displayName);
    if (userObj.length === 0) { // checking whether response is empty or not
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
    if (userObj.length === 0) { // checking whether response is empty or not
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

    // check whether token contains information or not
    if ((String)(currentUser.userId) !== (String)(userObj._id)) {
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

    if (userObj.length === 0) { // checking whether response is empty or not
      return res.status(404).json({
        message: 'Not found',
      });
    }
    const userFavs = await favouriteDAL.findFavorite(params.userId);
    const userTags = await tagDAL.getUserTag(params.userId);
    const userPhotos = await userDAL.getPhotos(params.userId); // array of photos

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
      person: userObj.personId,
      tags: userTags.length,
      favs: userFavs.length,

    });
  } catch (error) {
    return res.status(500).json(error); // returns 500 if it couldn't access db
  }
};

exports.getGroups = async function getGroupps(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getUserGroupsById(params.userId);
    if (userObj.length === 0) { // checking whether response is empty or not
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
    if (userObj.length === 0) { // checking whether response is empty or not
      return res.status(404).json({
        message: 'Not found',
      });
    }
    return res.status(200).json(userObj);
  } catch (error) {
    return res.status(500).json(error); // returns 500 if it couldn't access db
  }
};

exports.sendProEmail = async function sendPro(req, res) {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).send({ statusCode: 401, error: 'Unauthorized' });
  try {
    const { userId } = await decryptAuthToken(authorization);
    const user = await userDAL.getUserById(userId);

    if (user && !user.isPro) {
    // sends email if the user exists and is pro
      await sendProEmail(user._id, user.email);

      res.status(201).json({ statusCode: 201 });
    } else if (user && user.isPro) {
    // user in db but not pro
      res.status(409).send({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' });
    }
  } catch (err) {
    // user not in db
    res.status(401).send({ statusCode: 401, error: 'Unauthorized' });
  }
};
exports.followUser = async function followUser(req, res, next) {
  const { body } = req;
  // body.userId contain id of user you need to follow
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

    // forwarding info from mw / to next
    req.sender = userObj; // since userObj is the one following
    // no need to send reciever as its already in req.body.userId

    next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.becomePro = async function becomePro(req, res) {
  const { proToken } = req.params;

  try {
    // decrypt reset token to get userID
    const { userId } = await decryptProToken(proToken);
    // use the id and the new password to change the current pw
    await userDAL.becomePro(userId);

    res.status(201).json({ statusCode: 201 });
  } catch (err) {
    const errMsg = JSON.parse(err.message);

    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};

exports.getPublicPhotos = async function getPublicPhotos(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getUserPublicPhotos(params.userId);
    if (userObj.length === 0) { // checking whether response is empty or not
      return res.status(404).json({
        message: 'Not found',
      });
    }
    return res.status(200).json(userObj);
  } catch (error) {
    return res.status(500).json(error); // returns 500 if it couldn't access db
  }
};
