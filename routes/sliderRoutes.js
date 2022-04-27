const express = require('express');
const sliderController = require('./../controllers/sliderController');

const router = express.Router();

console.log(sliderController);
router.get('/', sliderController.getSlider);

module.exports = router;
