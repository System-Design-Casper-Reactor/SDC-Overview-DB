const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// own routes to controller here
router.get('/', controllers.);

module.exports = router;