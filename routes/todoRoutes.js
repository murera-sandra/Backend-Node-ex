const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')

router.post('/',async(req,res)=>{
    const { title,description } = req.body;
    const newTodo = new Todo({
        title,
        description
    })
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
})

router.get('/',async(req,res)=>{
    const todos = await Todo.find();
    res.json(todos)
})

router.get('/:id',async(req,res)=>{
    const todo = await Todo.findById(req.params.id);
    res.json(todo)
})

router.put('/:id',async(req,res)=>{
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.json(updatedTodo);
})
router.delete('/:id',async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id)
    res.json({message:'Todo Deleted'})
})

module.exports= router;