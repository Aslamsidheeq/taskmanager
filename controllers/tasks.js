const Task = require('../models/Task')

const getAllTasks = async (req,res)=>{
    try{
        const task = await Task.find({})
        res.status(201).json({task}) //task:task
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const createTask = async (req,res)=>{
    try{
        const task=await Task.create(req.body) //passing to
        res.status(201).json({task})
    } catch(error){
        res.status(500).json({msg:error})
    }
    
}
const getTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID})
        //if id didnt match:
        if(!task){
            return res.satus(404).json({msg: `No task found with the id : ${taskID}` })
        }
        res.status(200).json({task})
    }catch(error){ //if no value/syntax error
        res.status(500).json({msg:"wat the hell",error})
    }
}

const updateTask =async(req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.satus(404).json({msg: `No task found with the id : ${taskID}` })
        }
        res.status(200).json({task})

    }catch(error){
        res.status(500).json({msg:"wat the hell",error})
    }
}

const deleteTask = async (req,res)=>{
    try{
        const {id:taskID} =req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.satus(404).json({msg:`No task found with the id : ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(404).json({msg:error})
    }

}

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}