const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

// AE
// addGallery-just path for adding gallery with only its url attribute just for testing my function

const Gallery = require('./galleryModel');

// just testing requests
router.get('/', (req, res) => {
  Gallery.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        galleryCount: docs.length,
        galleries: docs,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// AE :: NOT MY FUNCTION BUT TESTING
router.post('/addGallery', (req, res) => {
  const _id = new mongoose.Types.ObjectId();
  // needed to define it here so it will be defined when we are assigning it in url
  // unless it will give error

  const gallery = new Gallery({
    _id,
    name: req.body.name,
    url: `https://www.flickr.com/photos/flickr/galleries/${_id}/`,
  });

  gallery.save()
    .then((result) => {
      res.status(201).json({
        message: 'Gallery is created',
        createdGallery: {

          _id: result._id,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
