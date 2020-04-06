var todoController = require('../controllers/todos')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', todoController.index);
router.post('/', todoController.create);
router.get('/:id', todoController.show);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.destroy);

module.exports = router;