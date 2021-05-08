const express = require('express');
const cameraController = require('./cameraController');

const router = express.Router();

router.post('/', cameraController.addCamera);
router.get('/:brand/models', cameraController.getBrandModels);
module.exports = router;
