const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// own routes to controller here
router.get('/products', controllers.get);
router.get('/products/:product_id', controllers.getOne);
router.get('/products/:product_id/related', controllers.getRelated);
router.get('/products/:product_id/styles', controllers.getStyles);
router.get('/loaderio-77f220b41a4dd42ca3ffdaacb52c79ee', controller.loader);
module.exports = router;
