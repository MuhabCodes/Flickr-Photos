const express = require('express');

const router = express.Router();

const personController = require('./personController');

router.get('/:userId', personController.getProfile);
router.post('/:userId', personController.updateProfile);
module.exports = router;
