
const express = require('express')
const User = require('./userModel');
const userController = require('./userController')
const router = express.Router()

router.get('/email/:email',userController.getUserByEmail);
  

router.get('/uname/:userName',userController.getUserbyDisplayName)
router.get('/',userController.getAllUsers)
module.exports = router;
