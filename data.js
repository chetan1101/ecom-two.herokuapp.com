const bcrypt = require('bcryptjs');

module.exports = {
    users:[
        {
            name:"chetan",
            email:"ctn@mail.com",
            password:bcrypt.hashSync('1234',8),
            isAdmin:true
        },
        {
            name:"rajesh",
            email:"raj@mail.com",
            password:bcrypt.hashSync('1234',8),
            isAdmin:false
        },

    ],
    products:[
        {
            
            name:"product one",
            category:"Shirt",
            image:"/images/item.jpg",
            price:200,
            countInStock:0,
            brand:"Nike",
            ratting:4.0,
            numReviews:10,
            description:"high quality product."
        },
        {
            
            name:"product two",
            category:"Shirt",
            image:"/images/item.jpg",
            price:200,
            countInStock:1,
            brand:"Nike",
            ratting:4.0,
            numReviews:10,
            description:"high quality product."
        },
        {
            
            name:"product one",
            category:"Shirt",
            image:"/images/item.jpg",
            price:200,
            countInStock:3,
            brand:"Nike",
            ratting:4.0,
            numReviews:10,
            description:"high quality product."
        },
        {
            
            name:"product one",
            category:"Shirt",
            image:"/images/item.jpg",
            price:200,
            countInStock:20,
            brand:"Nike",
            ratting:4.0,
            numReviews:10,
            description:"high quality product."
        },
        {
            
            name:"product one",
            category:"Shirt",
            image:"/images/item.jpg",
            price:200,
            countInStock:20,
            brand:"Nike",
            ratting:4.0,
            numReviews:10,
            description:"high quality product."
        },
        {
            
            name:"product one",
            category:"Shirt",
            image:"/images/item.jpg",
            price:200,
            countInStock:20,
            brand:"Nike",
            ratting:4.0,
            numReviews:10,
            description:"high quality product."
        },

    ]
}