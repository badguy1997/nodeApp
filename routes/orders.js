const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'This is order api'
    });
});


router.get('/:orderId',(req, res, next)=>{
    const id = req.params.orderId;
    res.status(200).json({
        message: 'This is order details for order id',
        orderId: id 
    });
});

module.exports = router