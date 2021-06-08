/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const { decryptAuthToken } = require('../auth/services/decryptToken');

const { getUserById } = require('../user/userDAL');

exports.lookUpUser = async (req, res) => {
  const { url } = req.body;

  // flickr's url contain id of element specified not (displayName) so i will extract id from url

  const urlSplit = url.split('/'); // split url components whenever it encounter '/' into an array

  // TODO VERY IMPORTANT: SHOULD WE ALSO CHECK "people",... and same applies for all other functions
  // examples
  // if url = "https://www.flickr.com/people/192738037@N02/"
  // [ 'https:', '', 'www.flickr.com', 'people', '192738037@N02', '' ]

  // if url = "https://www.flickr.com/people/192738037@N02"
  // [ 'https:', '', 'www.flickr.com', 'people', '192738037@N02' ]

  let id = -1;
  // if last element in array is'' we would take one before otherwise last one will be id
  if (urlSplit[urlSplit.length - 1] === '') {
    id = urlSplit[urlSplit.length - 2];
  } else {
    id = urlSplit[urlSplit.length - 1];
  }
  // done extracting id
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({
      error: 'Invalid userId',
    });
  }

  try {
    const doc = await getUserById(id);
    if (doc) {
      res.status(200).json({
        id: doc._id,
        displayName: doc.displayName,
      });
    } else {
      res.status(404).json({
        message: 'User not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.getUserProfile = async (req, res) => {
  let { id } = req.query;

  if (!id) {
    // if its not sent in body , return calling user
    const myToken = req.cookies.jwt;
    // TODO CHECK IF THEY CHANGE COOKIES
    if (myToken) {
      const decrypted = await decryptAuthToken(myToken);
      id = decrypted.id;
    } else {
      // no token and no id in body
      return res.status(400).json({
        message: 'Bad Request',
      });
    }
  }

  // now we got _id either from body or from token
  // will follow this convention /profile/:userId

  // will check if its valid format or not
  if (id && mongoose.isValidObjectId(id)) {
    try {
      const user = await getUserById(id);
      if (user) {
        // successfuly found ...
        return res.status(200).json({
          id,
          url: `https://www.flickr.com/people/${id}/`,
        });
      }
      return res.status(404).json({
        message: 'User not found',
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  } else {
    res.status(400).json({
      message: 'Bad Request! Invalid userId ',
    });
  }
};

exports.getUserPhotos = async (req, res) => {
  let { id } = req.query;

  // will follow this convention /photos/:userId

  if (!id) {
    // if its not sent in body , return calling user so we need token
    const myToken = req.cookies.jwt;
    // TODO CHECK IF THEY CHANGE COOKIES
    if (myToken) {
      const decrypted = await decryptAuthToken(myToken);
      id = decrypted.id;
    } else {
      // no token and no id in body
      return res.status(400).json({
        message: 'Bad Request',
      });
    }
  }

  // will check if its valid format or not
  if (id && mongoose.isValidObjectId(id)) {
    try {
      const user = await getUserById(id);
      if (user) {
        // successfuly found ...
        return res.status(200).json({
          id,
          url: `https://www.flickr.com/photos/${id}`,
        });
      }
      return res.status(404).json({
        message: 'User not found',
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  } else {
    res.status(400).json({
      message: 'Bad Request! Invalid userId ',
    });
  }
};
