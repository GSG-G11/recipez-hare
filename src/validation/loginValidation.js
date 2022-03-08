const Joi = require('joi');
const logInSchema=Joi.object({
    username: Joi.string().min(3).max(200).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).required(),
})
const logInValidation=(dataObj)=> logInSchema.validateAsync(dataObj)
module.exports={logInValidation};