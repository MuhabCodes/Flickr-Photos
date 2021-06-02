const userDAL = require('./userDAL');
const { decryptAuthToken, decryptProToken } = require('../auth/Services/decryptToken');
const { sendProEmail } = require('../auth/Services/sendEmail');

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

exports.getUserInfoById = async function getUserInfoById(req, res) {
  const { params } = req;
  try {
    const userObj = await userDAL.getUserById(params.userId);
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
    return res.status(200).json(userObj.photos);
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
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
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
