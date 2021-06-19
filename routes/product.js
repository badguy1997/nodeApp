const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'product_1'
    });
});

router.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'product_1'
    });
});

router.get('/:productId',(req, res, next)=>{

    const id = req.params.productId;

    res.status(200).json({
        message: id
    });
});

module.exports = router