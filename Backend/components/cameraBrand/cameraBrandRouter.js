const express = require('express');
const brandController = require('./cameraBrandController');

const router = express.Router();

router.post('/', brandController.createBrand);

module.exports = router;
