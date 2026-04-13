const Todo = require('../models/Todo');

exports.createTodo = async(req,res)=>{
    try{
        const {title,description} = req.body;

        const newTodo = new Todo({
            title,
            description
        });
        const savedTodo = await Todo.save();
        res.status(201).json(savedTodo);
    } catch(error){
        res.status(500).json({message:error.message})
    }
};

exports.getAll = async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos)
    } catch(error){
        res.status(500).json({message:error.message})
    }
};

exports.getTodoById = async(req,res) =>{
    try{
    const todo = await Todo.findById(req.params.id);
    
    if(!todo){
        return res.status(404).json({message:'Todo not found'})
    }
    res.json(todo);

    }catch(error){
        return res.status(500).json({message:'Invalid ID format'})
    }
};

exports.updatedTodo = async(req,res) =>{
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        if(!updatedTodo){
            return res.status(404).json({message:'Todo not found'})
        }
        res.json(updatedTodo);
    } catch(error){
        return res.status(500).json({message:'invalid ID format'})
    }
};
exports.deletedTodo= async(req,res)=>{
    try{
        const todoDeleted = await Todo.findByIdAndDelete(req.params.id);
        
        if(!todoDeleted){
            return res.status(404).json({message:'not available'})
        }
        res.json({message:'Todo deleted successfully'});
    }catch(error){
        return res.status(500).json({message:'Invalid ID format'})
    }
};