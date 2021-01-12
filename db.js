const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).catch(err => console.log(err.reason));