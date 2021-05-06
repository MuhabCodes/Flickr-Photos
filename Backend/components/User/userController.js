const userDAL = require('./userDAL');

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
    return res.status(200).json(userObj);
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
    return res.status(200).json(userObj.photos);
  } catch (error) {
    return res.status(500).json(error); // returns 500 if it couldn't access db
  }
};
