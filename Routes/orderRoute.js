const express = require('express');
const Order = require('../Models/orderModel');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { isAuth } = require('../utils');



router.post('/', isAuth, asyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ massage: "Cart is empty." });
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemPrice: req.body.itemPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id
        })
        const createdOrder = await order.save();
        res.status(201).send({ massage: "Order is placed", order: createdOrder })
    }
}))

module.exports = router;