const express = require('express');
const brandController = require('./cameraBrandController');

const router = express.Router();

router.post('/', brandController.createBrand);
router.get('/', brandController.getBrands);
router.get('/:brandName', brandController.getBrandWithName);

module.exports = router;
