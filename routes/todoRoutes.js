const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");
const { celebrate, Segments, Joi } = require("celebrate");
const auth = require("../middleware/auth");

router.post(
  "/",
  auth,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().min(3),
      description: Joi.string().required().min(5),
    }),
  }),
  todoController.createTodo,
);

router.get("/", auth, todoController.getAllTodos);

router.get(
  "/:id",
  auth,
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().length(24).hex().required(),
    }),
  }),
  todoController.getTodoById,
);

router.put(
  "/:id",
  auth,
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().length(24).hex().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().min(3),
      description: Joi.string().required().min(5),
      completed: Joi.boolean(),
    }),
  }),
  todoController.updateTodo,
);

router.delete(
  "/:id",
  auth,
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().length(24).hex().required(),
    }),
  }),
  todoController.deleteTodo,
);
router.patch(
  "/:id/complete",
  auth,
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required().hex().length(24),
    }),
  }),
  todoController.markAsCompleted,
);

module.exports = router;
