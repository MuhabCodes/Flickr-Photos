const express = require('express');
const userController = require('./userController');

const router = express.Router();
router.get('/uname/:userName', userController.getUserbyDisplayName);
module.exports = router;
