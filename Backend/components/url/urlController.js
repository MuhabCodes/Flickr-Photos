/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const { decryptAuthToken } = require('../auth/Services/decryptToken');

const { findGroupById } = require('../Group/groupDAL');
const { getUserById } = require('../User/userDAL');
const { findGalleryById } = require('../Gallery/galleryDAL');

exports.getGroupById = async (req, res) => {
  const { groupId } = req.params;
  if (!mongoose.isValidObjectId(groupId)) {
    return res.status(404).json({
      error: 'Invalid groupId',
    });
  }
  try {
    const doc = await findGroupById(groupId);
    if (doc) {
      res.status(200).json({
        id: doc._id,
        url: `https://www.flickr.com/groups/${doc._id}/`,
      });
    } else {
      res.status(404).json({
        message: 'Group not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.lookUpGroup = async (req, res) => {
  const { url } = req.body;
  // flickr's url contain id of element specified

  const urlSplit = url.split('/'); // split url components whenever it encounter '/' into an array

  // examples if its group url
  // if url = "https://www.flickr.com/groups/192738037@N02/"
  // [ 'https:', '', 'www.flickr.com', 'groups', '192738037@N02', '' ]

  // example if photo pool url
  // url = "https://www.flickr.com/groups/192738037@N02/pool/"
  // [ 'https:', '', 'www.flickr.com', 'groups', '192738037@N02','pool','']
  // or if photo inside a photo pool
  // url = "https://www.flickr.com/photos/wayloncash/49951029628/in/pool-467849@N23/"
  // [ 'https:', '', .....,'pool-467849@N23','' ]

  // if last element in array is'' we would take one before otherwise last one will be id
  let id = -1;
  let emptyQuotes = 0; // this will be true if last is '' to use it later in gettingid
  if (urlSplit[urlSplit.length - 1] === '') {
    id = urlSplit[urlSplit.length - 2];
    emptyQuotes = 1;
  } else {
    id = urlSplit[urlSplit.length - 1]; // this mean there's no "/"
    emptyQuotes = 0;
  }

  if (!mongoose.isValidObjectId(id)) {
    // its photo pool so it will be either "pool" or "pool-id"
    if (id === 'pool') { // if last one is pool ,  id will be before it directly
      if (emptyQuotes === 1) {
        id = urlSplit[urlSplit.length - 3];
      } else {
        id = urlSplit[urlSplit.length - 2];
      }
    } else {
      // so it will be pool-id so we will substring it after pool- to end of string
      if (emptyQuotes === 1) {
        id = urlSplit[urlSplit.length - 2].substring(5);
      } else {
        id = urlSplit[urlSplit.length - 1].substring(5);
      }
    }
  }
  // done extracting id

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      error: 'Invalid groupId',
    });
  }

  try {
    const doc = await findGroupById(id);
    if (doc) {
      res.status(200).json({
        id: doc._id,
        name: doc.name,
        // TODO its groupName in api which is unuseful it should be name only, i know i'm in group
      });
    } else {
      res.status(404).json({
        message: 'Group not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

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

exports.lookupGallery = async (req, res) => {
  const { url } = req.body;
  // flickr's url contain id of element specified

  const urlSplit = url.split('/'); // split url components whenever it encounter '/' into an array

  // examples
  // if url = "https://www.flickr.com/galleries/192738037@N02/"
  // [ 'https:', '', 'www.flickr.com', 'galleries', '192738037@N02', '' ]

  // if url = "https://www.flickr.com/galleries/192738037@N02"
  // [ 'https:', '', 'www.flickr.com', 'galleries', '192738037@N02' ]
  let id = -1;
  // if last element in array is'' we would take one before otherwise last one will be id
  if (urlSplit[urlSplit.length - 1] === '') {
    id = urlSplit[urlSplit.length - 2];
  } else {
    id = urlSplit[urlSplit.length - 1];
  }
  // done extracting id

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      error: 'Bad Request!! Invalid galleryId',
    });
  }

  try {
    const doc = await findGalleryById(id);
    if (doc) {
      res.status(200).json({
        _id: doc._id,
        owner: doc.owner,
        primaryPhotoId: doc.primaryPhotoId,
        dateCreate: doc.dateCreate,
        dateUpdate: doc.dateUpdate,
        countPhotos: doc.countPhotos,
        countVideos: doc.countVideos,
        title: doc.title,
        description: doc.description,
        url: `https://www.flickr.com/photos/flickr/galleries/${doc._id}/`,
        // TODO /flickr was /straup in api but i saw real flickr and it was like one above

      });
    } else {
      return res.status(404).json({
        message: 'Gallery not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
