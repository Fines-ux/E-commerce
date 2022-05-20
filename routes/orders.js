const {order} = require ('../models/order');
const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const orderList = await order.find();

    if(!orderList){
        res.status(500).json({success: false});
    }

    res.send(orderList);
})

module.exports = router;