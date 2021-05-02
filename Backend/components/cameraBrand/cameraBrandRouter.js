const express = require('express');
const brandController = require('./cameraBrandController');

const router = express.Router();

router.post('/', brandController.createBrand);
router.get('/', brandController.getBrands);

module.exports = router;
