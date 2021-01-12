const express = require("express");
const data = require("./data");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv/config");
require('./db');

const userRoutes = require("./Routes/userRoute");
const productRoutes = require("./Routes/productRoute");

app.use(cors());
app.use(bodyParser.json());
app.use((err, req, res, next)=>{
    res.status(500).send({massage: err.massage});
});
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes)

app.use(express.static('client/build'))
const path = require('path');
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})



app.listen(4000, ()=>console.log("server is running on port 4000"));