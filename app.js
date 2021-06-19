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

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message,
            status: error.status
        }
    });
});

module.exports = app;