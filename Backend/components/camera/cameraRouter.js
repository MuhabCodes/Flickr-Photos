const express = require('express');
const cameraController = require('./cameraController');

const router = express.Router();

router.post('/', cameraController.AddCamera);

module.exports = router;
