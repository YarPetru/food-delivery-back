const Joi = require('joi');

const userDataSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

const orderDataSchema = Joi.object({
  _id: Joi.string().required(),
  shop_title: Joi.string().required(),
  product: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  quantity: Joi.number().required(),
});

const orderSchema = Joi.object({
  user: userDataSchema.required(),
  order: Joi.array().items(orderDataSchema).required(),
});

module.exports = orderSchema;
