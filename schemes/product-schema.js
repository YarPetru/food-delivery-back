const Joi = require('joi');

const productSchema = Joi.object({
  shop_title: Joi.string().required(),
  product: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  // images: Joi.array().items(Joi.string()).required(),
});

module.exports = productSchema;
