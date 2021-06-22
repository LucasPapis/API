const express = require('express');
const router = express.Router();
const apiController = require('./controllers/apiController');

router.get('/login', apiController.login)
router.get('/usuarios', apiController.todos);
router.get('/usuario/:id', apiController.one);
router.post('/usuario', apiController.novo);
router.put('/usuario/:id', apiController.altera);
router.delete('/usuario/:id',apiController.deleta);

module.exports = router;