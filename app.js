const express = require("express");
const data = require("./data");
const app = express();
const PORT  = process.env.PORT || 5000
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv/config");


const userRoutes = require("./Routes/userRoute");
const productRoutes = require("./Routes/productRoute");

app.use(cors());
app.use(bodyParser.json());
app.use((err, req, res, next)=>{
    res.status(500).send({massage: err.massage});
});
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
  }


require('./db');
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`));