const express = require('express');
const userController = require('./userController');

const router = express.Router();
router.get('/uname/:userName', userController.getUserbyDisplayName);
router.get('/email/:email',userController.getUserByEmail);
module.exports = router;
