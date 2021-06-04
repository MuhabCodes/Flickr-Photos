const express = require('express');

const router = express.Router();

const { getMyNotifications } = require('./notificationController');

router.get('/myNotifications', getMyNotifications);

module.exports = router;
