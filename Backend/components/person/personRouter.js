const express = require('express');

const router = express.Router();
const { ObjectId } = require('mongoose').Types;
require('./personModel');

const User = require('../User/userModel');
const personController = require('./personController');

router.get('/:userId', personController.getProfile);
module.exports = router;
