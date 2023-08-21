const mongoose = require('mongoose');

console.log(mongoose.version);

const connectDB = (url)=>{
    return mongoose.connect(url,
        {
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
        })
}

module.exports = connectDB