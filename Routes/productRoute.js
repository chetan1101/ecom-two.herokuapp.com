const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const data = require("../data");
const Product = require('../Models/productModel');

router.get("/seed", asyncHandler(async(req,res)=>{
    const productList = await Product.insertMany(data.products);
    res.send(productList)
}));

router.get("/", asyncHandler(async(req, res)=>{
    const products = await Product.find({});
    res.send(products);
}))

router.get("/:id", asyncHandler(async(req, res)=>{
    const product = await Product.findById({_id: req.params.id});
    product ? res.send(product) :  res.status(404).send({massage:"Product Not Found."})
}))

module.exports = router;