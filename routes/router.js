const express = require('express');
const router = express.Router();
const controller = require('../controller/BahiaController');

router.get('/', controller.main);
router.get('/about', controller.about)
router.get('/contact', controller.contact)
router.get('/products', controller.products)
router.get('/services', controller.services)

module.exports = router;