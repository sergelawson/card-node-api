var usersController = require('../controllers/users')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', usersController.create);

module.exports = router;
