const express = require('express');
const cameraController = require('./cameraController');

const router = express.Router();

router.post('/', cameraController.AddCamera);
router.get('/:brand/models', cameraController.getBrandModels);
module.exports = router;
