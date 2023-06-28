const Joi = require("joi");

const userRegisterSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

const userUpdateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const userEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  userRegisterSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
};
