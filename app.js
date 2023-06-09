const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const moment = require('moment');
// const fs = require('fs/promises');

const productsRouter = require('./routes/api/products');
const ordersRouter = require('./routes/api/orders');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// app.use(async (request, __, next) => {
//   const { method, url } = request;
//   const date = moment().format('DD-MM-YYYY_hh:mm:ss');
//   await fs.appendFile('./public/server.log', `\n${method} ${url} ${date}`);
//   next();
// });

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.use((__, response) => {
  response.status(404).json({
    message: 'Not found',
  });
});

app.use((error, __, response, _) => {
  const { status = 500, message = 'Server error' } = error;
  response.status(status).json({ message });
});

module.exports = app;
