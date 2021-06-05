const express = require('express');

const router = express.Router();

const personController = require('./personController');

router.get('/:userId', personController.getProfile);
module.exports = router;
