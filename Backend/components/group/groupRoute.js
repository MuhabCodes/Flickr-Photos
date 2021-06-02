const express = require('express');
const groupController = require('./groupController');

const router = express.Router();
router.post('/', groupController.createGroup);
router.get('/', groupController.getAllGroups);

module.exports = router;
