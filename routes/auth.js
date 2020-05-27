var authController = require('../controllers/auth')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', authController.create);

module.exports = router;
