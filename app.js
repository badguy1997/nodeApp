const { request } = require('express');
const express = require('express');
const app = express();

const productRouters = require('./routes/product');
const ordersRouters = require('./routes/orders');
const morgan = require('morgan');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((res,req,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Orgin, X-Requested-with, Content-Type, Accept, Authroizations");
    
    if (req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json({

        });
    }
    next();
});

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