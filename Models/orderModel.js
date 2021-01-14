const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    orderItems: [
        {
            name: { type: String, required: true },
            image: { type: String, required: true },
            qty: { type: Number, required: true },
            price: { type: Number, required: true, default: 0 },
            _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
        },
    ],

    shippingAddress: {
        fullname: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },

    paymentMethod: { type: String, required: true },
    itemPrice: { type: String, required: true },
    shippingPrice: { type: String, required: true },
    taxPrice: { type: String, required: true },
    totalPrice: { type: String, required: true },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date }
},
    {
        timestamp: true
    });

module.exports = mongoose.model("Order", orderSchema);