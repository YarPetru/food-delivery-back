const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const orderSchema = new Schema(
  {
    user_data: {
      type: String,
      required: true,
    },
    products_list: {
      type: Array,
      required: true,
    },
    // price: {
    //   type: Number,
    //   required: true,
    // },
    // image: {
    //   type: String,
    //   required: true,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.post('save', handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;
