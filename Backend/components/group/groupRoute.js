const express = require('express');
const groupController = require('./groupController');

const router = express.Router();
router.post('/', groupController.createGroup);

module.exports = router;
