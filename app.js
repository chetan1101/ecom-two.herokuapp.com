require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose")
const app = express();
const PORT  = process.env.PORT
const cors = require('cors');
const bodyParser = require("body-parser");


// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex:true
// }).catch(err => console.log(err.reason));


mongoose.connect(process.env.MONGODB_URI_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).catch(err => console.log(err.reason));

const userRoutes = require("./Routes/userRoute");
const productRoutes = require("./Routes/productRoute");
const orderRoutes = require("./Routes/orderRoute");

app.use(cors());
app.use(bodyParser.json());
app.use((err, req, res, next)=>{
    res.status(500).send({massage: err.massage});
});
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
  }

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`));