const Joi = require('joi');

const orderSchema = Joi.object({
  user_data: Joi.string().required(),
  // product: Joi.string().required(),
  // price: Joi.number().required(),
  // image: Joi.string().required(),
  // description: Joi.string().required(),
  products_list: Joi.array().items(Joi.string()).required(),
});

module.exports = orderSchema;
