const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().min(3).max(200).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).required(),
  repeatPassword: Joi.ref('password'),
});

const signUpValidation = (dataObj) => signUpSchema.validateAsync(dataObj);

module.exports = { signUpValidation };
