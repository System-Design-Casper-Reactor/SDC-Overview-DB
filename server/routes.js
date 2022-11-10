const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// own routes to controller here
router.get('/products', controllers.get);
router.get('/products/:product_id', controllers.getOne);
router.get('/products/:product_id/related', controllers.getRelated);
router.get('/products/:product_id/styles', controllers.getStyles);
router.get('/loaderio-03e5d8a1ff821025e29df547dc48c4bb', controllers.loader);
module.exports = router;
