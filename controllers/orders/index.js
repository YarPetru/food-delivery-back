const getAll = require('./get-all-orders');
const createOrder = require('./create-order');

const { ctrlWrapper } = require('../../helpers');

module.exports = {
  getAll: ctrlWrapper(getAll),
  createHero: ctrlWrapper(createOrder),
};
