const { request } = require('express');
const express = require('express');
const app = express();

const productRouters = require('./routes/product');
const ordersRouters = require('./routes/orders');
const morgan = require('morgan');

app.use(morgan('dev'));

//all the routers
app.use('/products',productRouters);
app.use('/orders',ordersRouters);

module.exports = app;