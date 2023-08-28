const express = require('express');
const app = express();                      //initialising
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
// app.get('/hello',(req,res)=>{
//     res.send('Task Manager App')
// })
app.use('/api/v1/tasks',tasks)              //using middleware (path,callback :middleware function)

const port = `https://main--precious-jalebi-fbf1c7.netlify.app/`

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}`))

    }catch(error){
        console.log(error)
    }
}
start()