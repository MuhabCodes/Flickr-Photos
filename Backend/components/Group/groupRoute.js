const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

// AE
// addGroup  ;; just path for adding group with only its url attribute just for testing my function

const Group = require('./groupModel');

// just testing requests
router.get('/', (req, res) => {
  Group.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        groupCount: docs.length,
        groups: docs,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// AE :: NOT MY FUNCTION BUT TESTING
router.post('/addGroup', (req, res) => {
  const _id = new mongoose.Types.ObjectId();
  // needed to define it here so it will be defined when we are assigning it in url
  // unless it will give error

  const group = new Group({
    _id,
    name: req.body.name,
    // url: `http://localhost:3000/groups/${_id}`,
  });

  group.save()
    .then((result) => {
      res.status(201).json({
        message: 'Group is created',
        createdGroup: {
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
