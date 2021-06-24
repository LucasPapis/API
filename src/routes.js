const express = require('express');
const router = express.Router();
const apiController = require('./controllers/apiController');

router.post('/login', apiController.login)
router.get('/usuarios', apiController.todos);
router.get('/usuario/:id', apiController.one);
router.post('/usuario', apiController.new);
router.put('/usuario/:id', apiController.update);
router.delete('/usuario/:id',apiController.del);

module.exports = router;