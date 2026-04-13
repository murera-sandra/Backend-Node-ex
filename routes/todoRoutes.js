const express = require('express');
const router = express.Router();
const todoController = require('./controllers/todoController');

router.post('/',todoController.createTodo);
router.get('/',todoController.getAll);
router.get('/',todoController.getTodoById);
router.put('/',todoController.updatedTodo);
router.delete('/',todoController.deletedTodo);

module.exports = router;