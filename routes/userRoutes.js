const express = require("express");
const router = express.Router();
const { celebrate, Joi, Segments } = require("celebrate");

const userController = require("../controllers/UserController");

router.post(
  "/signup",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required().min(3),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    }),
  }),
  userController.singUp,
);
module.exports = router;
