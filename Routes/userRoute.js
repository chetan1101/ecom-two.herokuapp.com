const express = require('express');
const asyncHandler = require('express-async-handler');
const data = require('../data');
const User = require("../Models/userModel");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { getToken } = require('../utils');

router.get('/seed', asyncHandler(async (req, res) => {
   // await User.remove({})
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers)
}));

router.post("/register", asyncHandler(async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    const createdUser = await newUser.save();
    if (createdUser) {
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: getToken(createdUser)
        })
    }else{
        res.status(500).send({massage:"User already exist."})
    }

}))

router.post("/signin", asyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: getToken(user)
            })
            return;
        }
    }
    res.status(401).send({ massage: "Invalid username or password." })
}));

module.exports = router;