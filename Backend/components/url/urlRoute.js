const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const { decryptAuthToken } = require('../auth/Services/decryptToken');

const Group = require('../Group/groupModel');
const User = require('../User/userModel');

// #region urls_related_to_group
// Function returns url to a certain group
// eslint-disable-next-line consistent-return
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
router.get('/groups/:groupId', (req, res) => {
  const { groupId } = req.params;

  if (!mongoose.isValidObjectId(groupId)) {
    return res.status(404).json({
      error: 'Invalid groupId',
    });
  }
  Group.findById(groupId).exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          // eslint-disable-next-line no-underscore-dangle
          id: doc._id,
          url: doc.url,
        });
      } else {
        res.status(404).json({
          message: 'Group not found',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// Function urls - lookupGroup // Returns a group Id, given the url to a group's page or photo pool.
// TODO :: discuss that ????
// i change a change here r.t. our api as we used to sent whole user's url in as url parameter
// i made this function as if its sent in body (more realistic !!)
// eslint-disable-next-line consistent-return
router.get('/group', (req, res) => {
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
      // eslint-disable-next-line no-lonely-if
      if (emptyQuotes === 1) {
        id = urlSplit[urlSplit.length - 2].substring(5);
      } else {
        id = urlSplit[urlSplit.length - 1].substring(5);
      }
    }
  }
  // done extracting id

  // eslint-disable-next-line no-undef
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({
      error: 'Invalid groupId',
    });
  }

  // eslint-disable-next-line no-undef
  Group.findById(id).exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          // eslint-disable-next-line no-underscore-dangle
          id: doc._id,
          name: doc.name,
          // TODO its groupName in api which is unuseful it should be name only, i know i'm in group
        });
      } else {
        res.status(404).json({
          message: 'Group not found',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// #endregion
// #region urls_related_to_user
// Function (urls - lookupUser) ;; returns id,username to a certain user

// TODO :: discuss that ????
// i change a change here r.t. our api as we used to sent whole user's url in as url parameter
// i made this function as if its sent in body (more realistic !!)
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
router.get('/user', (req, res) => {
  const { url } = req.body;

  // flickr's url contain id of element specified not (username) so i will extract id from url

  const urlSplit = url.split('/'); // split url components whenever it encounter '/' into an array

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
  // eslint-disable-next-line no-undef
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({
      error: 'Invalid userId',
    });
  }

  // eslint-disable-next-line no-undef
  User.findById(id).exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          // eslint-disable-next-line no-underscore-dangle
          id: doc._id,
          username: doc.username,
        });
      } else {
        res.status(404).json({
          message: 'User not found',
        });
      }
    })
    .catch((err) => res.status(500).json({
      error: err,
    }));
});

// Function (getUserProfile) - Returns the url to a user's profile.
// The Id of the user to fetch the url for is Optional so If omitted, the calling user is assumed.
// eslint-disable-next-line consistent-return
router.get('/userprofile', async (req, res) => {
  let { _id } = req.body;

  if (!_id) {
    // if its not sent in body , return calling user
    const myToken = req.cookies.jwt;
    // TODO CHECK IF THEY CHANGE COOKIES
    if (myToken) {
      const decrypted = await decryptAuthToken(myToken);
      // eslint-disable-next-line no-underscore-dangle
      _id = decrypted.id;
    } else {
      // no token and no id in body
      return res.status(400).json({
        message: 'Bad Request',
      });
    }
  }

  // now we got _id either from body or from token
  // will follow this convention /profile/:userId

  if (_id) {
    // will check if its valid format or not
    if (mongoose.isValidObjectId(_id)) {
      User.findById(_id)
        .exec()
        .then((user) => {
          if (user) {
            // successfuly found ...
            return res.status(200).json({
              id: _id,
              url: `http://www.flickr.com/people/${_id}`,
            });
          }
          return res.status(404).json({
            message: 'User not found',
          });
        })
        .catch((err) => res.status(500).json({
          error: err,
        }));
    } else {
      res.status(404).json({
        message: 'Invalid userId ',
      });
    }
  }
});

// Function (getUserPhotos) - Returns the url to a user's photos.
// The Id of the user to fetch the url for is Optional so If omitted, the calling user is assumed.
// eslint-disable-next-line consistent-return
router.get('/userphotos', async (req, res) => {
  let { _id } = req.body;

  if (!_id) {
    // if its not sent in body , return calling user
    const myToken = req.cookies.jwt;
    // TODO CHECK IF THEY CHANGE COOKIES
    if (myToken) {
      const decrypted = await decryptAuthToken(myToken);
      // eslint-disable-next-line no-underscore-dangle
      _id = decrypted.id;
    } else {
      // no token and no id in body
      return res.status(400).json({
        message: 'Bad Request',
      });
    }
  }

  // now we got _id either from body or from token
  // will follow this convention /photos/:userId

  if (_id) {
    // will check if its valid format or not
    if (mongoose.isValidObjectId(_id)) {
      User.findById(_id)
        .exec()
        .then((user) => {
          if (user) {
            // successfuly found ...
            return res.status(200).json({
              id: _id,
              url: `http://www.flickr.com/photos/${_id}`,
            });
          }
          return res.status(404).json({
            message: 'User not found',
          });
        })
        .catch((err) => res.status(500).json({
          error: err,
        }));
    } else {
      res.status(404).json({
        message: 'Invalid userId ',
      });
    }
  }
});
// #endregion
// #region urls_related_to_gallery
// Function urls - lookupGallery // Returns gallery info, by url.
// TODO :: discuss that ????
// i change a change here r.t. our api as we used to sent whole user's url in as url parameter
// i made this function as if its sent in body (more realistic !!)
// eslint-disable-next-line consistent-return
router.get('/gallery', (req, res) => {
  const { url } = req.body;
  // flickr's url contain id of element specified

  const urlSplit = url.split('/'); // split url components whenever it encounter '/' into an array

  // examples
  // if url = "https://www.flickr.com/galleries/192738037@N02/"
  // [ 'https:', '', 'www.flickr.com', 'galleries', '192738037@N02', '' ]

  // if url = "https://www.flickr.com/galleries/192738037@N02"
  // [ 'https:', '', 'www.flickr.com', 'galleries', '192738037@N02' ]

  // if last element in array is'' we would take one before otherwise last one will be id
  if (urlSplit[urlSplit.length - 1] === '') {
    // eslint-disable-next-line no-undef
    _id = urlSplit[urlSplit.length - 2];
  } else {
    // eslint-disable-next-line no-undef
    _id = urlSplit[urlSplit.length - 1];
  }
  // done extracting id

  // eslint-disable-next-line no-undef
  if (!mongoose.isValidObjectId(_id)) {
    return res.status(404).json({
      error: 'Invalid groupId',
    });
  }

  // eslint-disable-next-line no-undef
  Gallery.findById(_id).exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({
          // eslint-disable-next-line no-underscore-dangle
          id: doc._id,
          url: '/photos/straup/galleries/72157617483228192',
          owner: '35034348999@N01',
          primaryPhotoId: '292882708',
          dateCreate: '1241028772',
          dateUpdate: '1270111667',
          countPhotos: '17',
          countVideos: '0',
          title: "Cat Pictures I've Sent To Kevin Collins",
          description: [],
          // TODO AE / I REMOVED FARM,SECRET,SERVER SO NEED API SYNC!
        });
      } else {
        res.status(404).json({
          message: 'Gallery not found',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
// #endregion

module.exports = router;
