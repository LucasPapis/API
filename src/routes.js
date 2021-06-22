const express = require('express');
const router = express.Router();
const apiController = require('./controllers/apiController');

router.get('/ping', apiController.ping);

module.exports = router;