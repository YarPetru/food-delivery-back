const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const userDataSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
});

const orderDataSchema = new Schema({
  shop_title: String,
  product: String,
  price: Number,
  description: String,
  image: String,
  quantity: Number,
});

const orderSchema = new Schema(
  {
    user: userDataSchema,
    order: [orderDataSchema],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.post('save', handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;
