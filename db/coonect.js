const mongoose = require('mongoose');

console.log(mongoose.version);

const connectionString = 'mongodb+srv://aslam:hp22atlas@nodeexpress.pilxthw.mongodb.net/TASKMANAGER?retryWrites=true&w=majority';

const connectDB = (url)=>{
    
}

mongoose.connect(connectionString,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    }).then(()=>console.log("connected to db")).catch((err)=>console.log("error und brooo"))