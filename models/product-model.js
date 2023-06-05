const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const productSchema = new Schema(
  {
    shop_title: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

productSchema.post('save', handleMongooseError);

const Product = model('product', productSchema);

module.exports = Product;
