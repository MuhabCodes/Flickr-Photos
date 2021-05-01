const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// AE
// adduser  ;; just path for adding user with only its url attribute just for testing my function

const User = require('./userModel');

// just testing requests
router.get('/', (req, res) => {
  User.find()
    .exec()
    .then((docs) => {
      res.status(200).json({
        userCount: docs.length,
        users: docs,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// AE :: NOT MY FUNCTION BUT TESTING
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => jwt.sign({ id }, 'ahmed ehab secret', {
  expiresIn: maxAge,
});

router.post('/adduser', (req, res) => {
  const user = new User({
    email: 'body_2000@outlook.com',
    password: 'doksanf',
    username: 'ahmedehabb8',
  });

  User.create(user)
    .then((result) => {
      // eslint-disable-next-line no-underscore-dangle
      const myToken = createToken(result._id);
      res.cookie('jwt', myToken, {
        maxAge: maxAge * 1000,
        httpOnly: true,
      });
      res.status(201).json({
        message: 'user is created',
        createduser: {
          // eslint-disable-next-line no-underscore-dangle
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
