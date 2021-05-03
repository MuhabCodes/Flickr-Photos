const express = require('express');

const router = express.Router();
const { ObjectId } = require('mongoose').Types;
require('./personModel');

const User = require('../User/userModel');

router.get('/:userId', (req, res) => {
  const user = req.params.userId;
  const toId = ObjectId(user);

  User.findById(toId)
    .select('person')
    .populate('person')
    .exec()
    .then((docs) => {
      res.status(200).json(
        docs.person,
      );
    })

    .catch((err) => {
      res.status(500).json(

        {
          error: err,

        },
      );
    });
});
module.exports = router;
